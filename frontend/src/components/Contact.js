import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./components.css";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";

const { REACT_APP_SERVICE, REACT_APP_TEMPLATE, REACT_APP_KEY } = process.env;

export default function Contact() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const { t } = useTranslation();

  AOS.init();
  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setError(null);

    if (isValidEmail(email)) {
      console.log("The email is valid");
    } else {
      setError("Email is invalid");
    }
  };
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        REACT_APP_SERVICE,
        REACT_APP_TEMPLATE,
        form.current,
        REACT_APP_KEY
      )
      .then(
        (result) => {
          // console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <footer id="contact" className="row p-5 mb-1" data-aos="fade-up">
      <div className="col d-flex flex-column ">
        <p>{t("Contact.1")}</p>
        <p>© Çlirim Sadiku,2023.</p>
        <p>{t("Contact.2")}</p>
      </div>
      <div className="col">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="d-flex flex-column gap-2"
        >
          <h3>{t("Contact.3")}</h3>
          <label>{t("Contact.4")} </label>
          <input type="text" className="rounded" name="name" required />
          <label>{t("Contact.5")} </label>
          <input type="email" className="rounded" name="email" />
          {error && <h2 style={{ color: "red" }}>{error}</h2>}
          <label>{t("Contact.6")} </label>
          <input
            type="textarea"
            className="rounded"
            name="message"
            required
            style={{ minHeight: "5rem" }}
          />
          <div>
            <button
              type="submit"
              value="Send"
              rows="2"
              cols="20"
              wrap="hard"
              className="btn btn-primary"
            >
              {t("Contact.7")}
            </button>
          </div>
        </form>
      </div>
    </footer>
  );
}
