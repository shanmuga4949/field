
import React, {useEffect, useState, useRef} from 'react';
import { ProductsData } from './Product';

import './Field.css';
import img from './Banner.jpg';
import BillingPage from './BillingPage';






function Online() {
  const [cart, setCart] = useState([]); // Initialize an empty cart
  const [images, setImages] = useState(ProductsData);
  const [cartValue, setCartValue] = useState([]);
  const nameInputRef = useRef(null); // Separate refs for Name and Mobile Number
  const mobileNumberInputRef = useRef(null);
  const [showBilling, setShowBilling] = useState(false);

  useEffect(() => {
    const elements = document.getElementsByName('name', 'mobileNo'); // Replace 'inputName' with your element's name
    if (elements.length > 0) {
      // Access the first element (or loop through elements if needed)
      const element = elements[0];
      // Now you can use element with getElementsByName

      // If you want to change the value of an input field, you can do:
      element.value = 'New Value';
    }
  }, []);
  
  

  // Function to add a product to the cart
  const addToCart = (Product) => {
    setCart([...cart, Product]);
  };
  

  // Function to remove a product from the cart
  const removeFromCart = (Product) => {
    const updatedCart = cart.filter((item) => item.id !== Product.id);
    setCart(updatedCart);
  };

  // Calculate the total price of items in the cart
  const calculateTotal = () => {
    return cart.reduce((total, Product) => total + Product.price, 0).toFixed(2);
  };

  function updateBill() {
    const chart = {
      name: nameInputRef.current.value,
      mobileNo: mobileNumberInputRef.current.value,
    };

    setCartValue(chart);
    setShowBilling(true); // Set showBilling to true to display the BillingPage
  }
  

  useEffect(() => {
    // You can fetch or process the image data here if needed
    setImages(ProductsData);
  }, []);
    
 
  
  return (
    <div id='Background'>
      
      <img className='Img' src={img} />
      <h2>SHRI SHANMUGA AGENCIES</h2>
      <ul>
  {ProductsData.map((value) => (
    <li key={value.id}>
      <img src={value.images} alt={value.name} />
      <div id='design'>
      
      <p>{value.name}</p>
      <p>₹{value.price}</p>
      <strong id='detail'>{value.productDetails}</strong><br />
      <button onClick={() => addToCart(value)}>+</button> 
      <button id='gap' onClick={() => removeFromCart(value)}>-</button>
      </div>
    </li>
  ))}
</ul>

      
       <div id='crt'>
        <span>
         <h3>Cart</h3>
          <ul>
            {cart.map((Product) => (
            <li key={Product.id}>
              <p>{Product.name}</p>
              <p>₹{Product.price}</p>
            </li>
            ))}
          </ul>
          <p id='Ttl'>Total: ₹{calculateTotal()}</p>
        </span> 
        </div>
        {showBilling ? (
        <BillingPage cart={cart} cartValue={cartValue} calculateTotal={calculateTotal} />
      ) : (
        <div>
         <label>Name: </label>
              <input
                type="text"
                id="Name" ref={nameInputRef}
                />
         <label>Mobile Number:</label>
              <input
                type="text"
                id="mobileNumber" ref={mobileNumberInputRef}
              />
              <br/>
              <button type="submit" onClick={updateBill}>
            Purchase
          </button>
        </div>
      )}
          
        </div>
        
        
    
  );
 
}
export default Online;
