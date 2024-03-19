import React from "react";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_n3rb5od', 'template_930hbgs', form.current, {
        publicKey: '2xVWe1Sor1xpAfxh0',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          window.alert('Your query is Submitted😊'); // Display popup message
          window.location.reload(); // Refresh the page
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  
  return (
    <div className="contact-page-wrapper">
      <h1 className="primary-heading">Have Question In Mind?</h1>
      <h1 className="primary-heading">Let Us Help You</h1>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Contact;
