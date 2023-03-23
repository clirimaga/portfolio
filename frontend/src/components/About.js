import React from "react";
import { TypeAnimation } from "react-type-animation";
import "./components.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

export default function About() {
  AOS.init();
  const { t } = useTranslation();

  return (
    <div
      className="col-5 col-sm-6 col-12 ms-5 mt-2 d-flex flex-column justify-content-around"
      data-aos="zoom-out-left"
    >
      <div>
        <h3>{t("Hi.1")}👋</h3>
        <h3>{t("Who.1")}</h3>
        <TypeAnimation
          sequence={[
            "Frontend", // Types 'One'
            1500, // Waits 1s
            "Backend", // Deletes 'One' and types 'Two'
            1500, // Waits 2s
            "Full-Stack Developer", // Types 'Three' without deleting 'Two'
            1500,
          ]}
          wrapper="span"
          cursor={true}
          repeat={Infinity}
          speed={60}
          style={{ fontSize: "2rem" }}
          className="maincolor"
        />
      </div>
      <h5>{t("Profile.1")}</h5>
    </div>
  );
}
