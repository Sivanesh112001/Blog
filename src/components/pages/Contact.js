
import React from 'react';
import './common.css';
const Contact = () => {
  return (
    <div>
      <h1>Contact Page</h1>
      <p>Feel free to contact us using the information below:</p>
      <ul>
        <li>Email: react@react-org.com</li>
        <li>Phone: +1 123-456-7890</li>
        <li>Address: 123 newland street,new jersey</li>
      </ul>
      <p>Or use the form below:</p>
      <ContactForm />
    </div>
  );
};

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
  };

  return (
    <form onSubmit={handleSubmit}>
        <div className='contact'>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" placeholder='Enter the Name' required />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder='enter the email' required />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="4" placeholder='enter the quries'required></textarea>
      </div>
      <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Contact;
