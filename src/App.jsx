import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Components/Header/Header"
import CartProvider from "./Store/CartProvider";
import Routers from "./Components/Routers/Routers";
import { AuthContextProvider } from "./Store/AuthContext";

function App() {
  return (
    <Router>
      <CartProvider>
        <AuthContextProvider>
          <Header/>
          <Routers/>
        </AuthContextProvider>
      </CartProvider>
    </Router>
  );
}

export default App;
