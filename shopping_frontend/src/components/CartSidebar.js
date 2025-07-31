import React from "react";

// PUBLIC_INTERFACE
function CartSidebar({ cart, updateCartQty, removeFromCart }) {
  // PUBLIC_INTERFACE
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div className="cart-sidebar">
      <h3>Cart</h3>
      {cart.length === 0 ? (
        <div className="cart-empty">Your cart is empty.</div>
      ) : (
        <div>
          <ul className="cart-list">
            {cart.map((item) => (
              <li key={item.id} className="cart-list-item">
                <span>{item.name}</span>
                <input
                  type="number"
                  min="1"
                  value={item.qty}
                  onChange={(e) =>
                    updateCartQty(item.id, parseInt(e.target.value, 10))
                  }
                  className="cart-qty-input"
                />
                <span className="cart-price">${(item.price * item.qty).toFixed(2)}</span>
                <button className="cart-remove-btn" onClick={() => removeFromCart(item.id)}>
                  ×
                </button>
              </li>
            ))}
          </ul>
          <div className="cart-summary">
            <span>Subtotal:</span>
            <span className="cart-total">${subtotal.toFixed(2)}</span>
          </div>
          <button className="checkout-btn" disabled>
            Checkout (demo)
          </button>
        </div>
      )}
    </div>
  );
}

export default CartSidebar;
