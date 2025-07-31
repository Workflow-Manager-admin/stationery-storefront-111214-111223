import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductGrid from "./components/ProductGrid";
import CartSidebar from "./components/CartSidebar";
import About from "./pages/About";
import Home from "./pages/Home";
import AuthPage from "./pages/AuthPage";
import "./App.css";

// PUBLIC_INTERFACE
function App() {
  // Cart state
  const [cart, setCart] = useState([]);
  // Auth state (null means not signed in)
  const [user, setUser] = useState(null);
  // Theme (for possible toggling)
  const [theme, setTheme] = useState("light");

  // Effect to apply theme to document element
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // PUBLIC_INTERFACE
  const addToCart = (product) => {
    setCart((prev) => {
      const found = prev.find((item) => item.id === product.id);
      if (found) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  // PUBLIC_INTERFACE
  const updateCartQty = (id, qty) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: Math.max(qty, 1) } : item
      )
    );
  };

  // PUBLIC_INTERFACE
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // PUBLIC_INTERFACE
  const handleAuth = (userObj) => {
    setUser(userObj);
  };

  return (
    <Router>
      <div className="site-grid">
        <Header
          user={user}
          setUser={setUser}
          toggleTheme={toggleTheme}
          theme={theme}
        />
        {/* Sidebar/cart only hidden on auth/about */}
        <main className="main-content">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home user={user} />
                  <ProductGrid addToCart={addToCart} />
                </>
              }
            />
            <Route
              path="/about"
              element={<About />}
            />
            <Route
              path="/auth"
              element={<AuthPage onAuth={handleAuth} user={user} />}
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
        {/* Cart is always visible except on /auth and /about */}
        <aside className={`sidebar${["/auth", "/about"].includes(window.location.pathname) ? " hide" : ""}`}>
          <CartSidebar
            cart={cart}
            updateCartQty={updateCartQty}
            removeFromCart={removeFromCart}
          />
        </aside>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
