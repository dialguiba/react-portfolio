import React from "react";
import "./ContactForm.css";

function Contactform() {
  return (
    <div id="contact-form-container">
      <form method="post" name="contact">
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <label>
            Your Name: <input type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Your Email: <input type="email" name="email" />
          </label>
        </p>
        <p>
          <label>
            Message: <textarea name="message" />
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
