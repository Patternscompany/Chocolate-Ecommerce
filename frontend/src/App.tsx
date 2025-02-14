// frontend/src/App.tsx
import { Routes, Route, Link } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Logout from "./components/Logout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Checkout from "./pages/Checkout";
import Navbar from "./pages/Navbar"
import { CartProvider } from "./context/CartContext";
import ProductDetail from "./pages/ProductDetail";
import Payment from "./pages/Payment";
import Services from "./pages/Services";

function App() {
  return (
    <CartProvider>
     <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/services" element={<Services />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/checkout" element={<Checkout cart={[]} />} />

      </Routes>
      </CartProvider>
  );
}

export default App;
