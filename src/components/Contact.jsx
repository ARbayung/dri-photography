import React, { useState } from "react";
import iconig from "./assets/icon-ig1.svg";
import iconphone from "./assets/icon-phone.svg";
import iconmail from "./assets/icon-mail.svg";
import iconfilm from "./assets/icon-film.svg";
import iconfilmedit from "./assets/icon-videoedit.svg";
import iconportrait from "./assets/icon-portrait.svg";
import iconsport from "./assets/icon-sports.svg";
import Swal from 'sweetalert2';

function Contact() {
  const [errors, setErrors] = useState({});

  const validateForm = (formData) => {
    let errors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.get("name")) {
      errors.name = true; // Name is required
    }

    if (!formData.get("email")) {
      errors.email = true; // Email is required
    } else if (!emailPattern.test(formData.get("email"))) {
      errors.email = true; // Email is invalid
    }

    if (!formData.get("message")) {
      errors.message = true; // Message is required
    }

    return errors;
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    // Validate form data before submission
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      // Stop form submission if there are validation errors
      return;
    }

    formData.append("access_key", "b4eddeeb-1c0b-44f8-b3e6-f3982f34de5b");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      document.getElementById("form").reset();
      setErrors({}); // Reset errors after successful submission

      Swal.fire({
        title: "Thanks for reaching out!",
        text: "We will be working hard to get back to you.",
        icon: "success",
      });
    }
  };

  return (
    <div className="contact-wrapper">
      <div className="contact-services">
        <div>
          <h1>Services.</h1>
          <hr />
          <div className="contact-services-container">
            <img src={iconfilm} alt="film" className="contact-icon" />
            <div>
              <h2>Videography</h2>
            </div>
          </div>
          <div className="contact-services-container">
            <img src={iconfilmedit} alt="film" className="contact-icon" />
            <div>
              <h2>Video edits</h2>
            </div>
          </div>
          <div className="contact-services-container">
            <img src={iconportrait} alt="film" className="contact-icon" />
            <div>
              <h2>Professional portraits</h2>
            </div>
          </div>
          <div className="contact-services-container">
            <img src={iconsport} alt="film" className="contact-icon" />
            <div>
              <h2>Sports and Fitness</h2>
            </div>
          </div>
        </div>
        <div className="contact-social">
          <a href="https://www.instagram.com/driifrancisco/">
            <img src={iconig} alt="instagram" className="contact-icon" />
          </a>
          <a href="mailto:driifrancisco.filmphoto@gmail.com">
            <img src={iconmail} alt="mail" className="contact-icon" />
          </a>
          <a href="tel:+44871703694">
            <img src={iconphone} alt="mail" className="contact-icon" />
          </a>
        </div>
      </div>
      <div className="contact-container">
        <form id="form" onSubmit={onSubmit} className="form-wrapper">
          <h1>Got a project? Shoot us a message.</h1>
          <h2>Tell us more about yourself and what you've got in mind.</h2>
          <div className="form-top">
            <input
              type="text"
              name="name"
              className={`contact-input ${errors.name ? "error-border" : ""}`}
              placeholder="Your name"
            />
            <input
              type="email"
              name="email"
              className={`contact-input ${errors.email ? "error-border" : ""}`}
              placeholder="you@company.com"
            />
          </div>
          <textarea
            name="message"
            className={`contact-textarea ${errors.message ? "error-border" : ""}`}
            placeholder="Tell us a little about your project..."
          ></textarea>
          <button type="submit" className="contact-button">Let's go!</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;