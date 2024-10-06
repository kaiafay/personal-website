import React from "react";

const Contact = () => {
  return (
    <div>
      <h1>Contact Me</h1>
      <p>If you'd like to get in touch, please fill out the form below.</p>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <br />
        <label>
          Message:
          <textarea name="message" />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
