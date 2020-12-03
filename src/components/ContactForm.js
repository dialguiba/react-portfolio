import React from "react";
import "./ContactForm.css";

function Contactform() {
  return (
    <div id="contact-form-container">
      <form action="POST" data-netlify="true">
        <input type="text" name="name" id="" placeholder="Your name" required />
        <input type="email" name="email" id="" placeholder="Your Email" required />
        <textarea name="message" cols="30" rows="10" placeholder="Message" required></textarea>
        <div style={{ margin: "auto" }} data-netlify-recaptcha="true" required></div>
        <button type="submit">SEND</button>
      </form>
    </div>
  );
}

export default Contactform;
