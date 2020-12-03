import React from "react";
import "./ContactForm.css";

function Contactform() {
  return (
    <div id="contact-form-container">
      <form method="post" name="contact">
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <label>
            <input type="text" name="name" placeholder="Your name" required />
          </label>
        </p>
        <p>
          <label>
            <input type="email" name="email" placeholder="Your Email" required />
          </label>
        </p>
        <p>
          <label>
            <textarea name="message" placeholder="Message" required />
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
      ,
    </div>
  );
}

export default Contactform;
