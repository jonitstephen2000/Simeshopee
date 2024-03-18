import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import CreditCard from 'react-credit-cards';
import QRCode from 'qrcode.react';
import 'react-credit-cards/es/styles-compiled.css';
import './SlicePayment.css';

const SlicePayment = () => {
  const { productId } = useParams();
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    expiryDate: '',
    cvc: '',
    name: ''
  });
  const [productPrice, setProductPrice] = useState(0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfo({
      ...paymentInfo,
      [name]: value
    });
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    console.log('Payment submitted:', paymentInfo);
    setPaymentInfo({
      cardNumber: '',
      expiryDate: '',
      cvc: '',
      name: ''
    });
  };

  return (
    <div className="payment-container">
      <h2>Payment Page</h2>
      <p>Product ID: {productId}</p>
      <CreditCard
        number={paymentInfo.cardNumber}
        name={paymentInfo.name}
        expiry={paymentInfo.expiryDate}
        cvc={paymentInfo.cvc}
      />
      <form onSubmit={handlePaymentSubmit}>
        <label>
          Card Number:
          <input
            type="text"
            name="cardNumber"
            value={paymentInfo.cardNumber}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Expiry Date:
          <input
            type="text"
            name="expiryDate"
            value={paymentInfo.expiryDate}
            onChange={handleInputChange}
          />
        </label>
        <label>
          CVV:
          <input
            type="text"
            name="cvc"
            value={paymentInfo.cvc}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Name on Card:
          <input
            type="text"
            name="name"
            value={paymentInfo.name}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Product Price:
          <input
            type="number"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
          />
        </label>
        <button type="submit">Pay Now</button>
      </form>
      <div className="qr-code-container">
        <h3>QR Code</h3>
        <QRCode value={`Product ID: ${productId}, Price: ${productPrice}`} />
      </div>
    </div>
  );
};

export default SlicePayment;
