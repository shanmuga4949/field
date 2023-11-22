// BillingPage.js

import React from 'react';

function BillingPage({ cart, cartValue, calculateTotal }) {
  return (
    <div>
      <h2>Billing Details</h2>
      <p>Name: {cartValue.name}</p>
      <p>Mobile Number: {cartValue.mobileNo}</p>
      <h3>Items in Cart:</h3>
      <ul>
        {cart.map((Product) => (
          <li key={Product.id}>
            <p>{Product.name}</p>
            <p>₹{Product.price}</p>
          </li>
        ))}
      </ul>
      <p>Total: ₹{calculateTotal()}</p>
    </div>
  );
}

export default BillingPage;
