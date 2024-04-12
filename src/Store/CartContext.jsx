import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  let URL = "https://crudcrud.com/api/fce8d8c102254d0aafb4cd2d1b2b82a7/";
  let email = localStorage.getItem("email");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${URL}${email}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const data = await response.json();
          setCartItems(data);
        } else {
          console.log("Failed to fetch cart data");
        }
      } catch (error) {
        console.error("Error fetching cart data:", error);
      }
    };

    fetchData();
  }, []);

  const addItemToCartHandler = async (item, email) => {
    let updateItem;

    try {
      const response = await fetch(`${URL}${email}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      updateItem = data;
    } catch (error) {
      console.log(error);
    }

    let existingItem = updateItem.find(
      (cartItem) => Number(cartItem.items.id) === Number(item.id)
    );

    if (existingItem) {
      existingItem.items.quantity =
        Number(existingItem.items.quantity) + Number(item.quantity);

      await fetch(`${URL}${email}/${existingItem._id}`, {
        method: "PUT",
        body: JSON.stringify({
          items: existingItem.items,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    } else {
      await fetch(`${URL}${email}`, {
        method: "POST",
        body: JSON.stringify({
          items: item,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
    setCartItems(updateItem);
  };

  const removeItemFromCartHandler = async (id) => {
    let updatedItem;
    try {
      const response = await fetch(`${URL}${email}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      updatedItem = data;
    } catch (error) {
      console.log(error);
    }

    let existingItem = updatedItem.find((cartItem) => cartItem._id === id);

    if (Number(existingItem.items.quantity) > 1) {
      existingItem.items.quantity = Number(existingItem.items.quantity) - 1;

      await fetch(`${URL}${email}/${existingItem._id}`, {
        method: "PUT",
        body: JSON.stringify({
          items: existingItem.items,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    } else {
      updatedItem = items.filter((item) => item.id !== id);

      await fetch(`${URL}${email}/${existingItem._id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
    setCartItems(updatedItem);
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const cartContext = {
    cartItems: cartItems,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    getTotalItems: getTotalItems,
    totalAmount: 0,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};
export default CartProvider;

export const useCart = () => useContext(CartContext);
