import React, { useState, useEffect } from "react";
import axiosClient from "./axiosClient";
import { useTranslation } from "react-i18next";
import "./components.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Spinner from "react-bootstrap/Spinner";
import Badge from "./UI/Badge";

export default function TechSkills() {
  const [skills, setSkills] = useState([]);
  const [loading,setLoading] = useState(false);
  const { t } = useTranslation();

  AOS.init();
  useEffect(() => {
    setLoading(true)
    axiosClient
      .get("/skills")
      .then((res) => {
        console.log(res.data);
        setSkills(res.data);
      })
      .catch((err) => console.log(err));
      setLoading(false)
  }, []);

  return (
    <section className="row mt-5 text-center" data-aos="fade-down">
      <div></div>
      <div id="techskills" className="row mt-5 text-center p-4">
        <h1 className="mb-2 skilltitle">{t("Skills.1")}</h1>
        <div className="mt-5 col-4 d-flex flex-column justify-content-center align-items-center gap-3">
          {loading ? 
          <div className="d-flex justify-content-center my-5">
          <Spinner animation="grow" variant="primary" />
        </div> :  skills.map((skill) =>
            skill.type === "Frontend" && (
              <img
                key={skill._id}
                src={skill.pic}
                className="skill"
                alt="skill"
              />
            ) 
          )}
        </div>
        <div className="col-4 d-flex flex-column justify-content-center align-items-center gap-3">
          {skills.map((skill) =>
            skill.type === "Backend" && (
              <img
                key={skill._id}
                src={skill.pic}
                className="skill"
                alt="skill"
              />
            ) 
          )}
        </div>
        <div className="col-4 d-flex flex-column justify-content-center align-items-center gap-3">
          {skills.map((skill) =>
            skill.type === "Extra" && (
              <div className="skill">
              <img
                key={skill._id}
                src={skill.pic}
                className="skill"
                alt="skill"
              />
              <Badge>{skill.badge}</Badge>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
