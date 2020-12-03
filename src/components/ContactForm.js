import React from "react";
import "./ContactForm.css";

function Contactform() {
  return (
    <div id="contact-form-container">
      <form method="post" name="contact">
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <label>
            <input type="text" name="name" placeholder="Your name" style={{ width: "100%" }} required />
          </label>
        </p>
        <p>
          <label>
            <input type="email" name="email" placeholder="Your Email" style={{ width: "100%" }} required />
          </label>
        </p>
        <p>
          <label>
            <textarea name="message" cols="30" rows="10" placeholder="Message" required />
          </label>
        </p>
        <p>
          <button type="submit" style={{ width: "100%" }}>
            Send
          </button>
        </p>
      </form>
      ,
    </div>
  );
}

export default Contactform;
