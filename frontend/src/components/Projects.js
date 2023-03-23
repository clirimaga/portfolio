import React from "react";
import { useState, useEffect } from "react";
import axiosClient from "./axiosClient";
import { useTranslation } from "react-i18next";
import "./components.css";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Spinner from "react-bootstrap/Spinner";

import AOS from "aos";
import "aos/dist/aos.css";
export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [sort, setSort] = useState("Default");
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();

  const toggle = () => {
    setClicked(!clicked);
  };
  useEffect(() => {
    AOS.init();
    axiosClient
      .get("/projects")
      .then((res) => {
        console.log(res.data);
        setProjects(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    setLoading(true);
    axiosClient
      .get(`/projects?sort=${sort}`)
      .then((res) => {
        // console.log(res.data);
        setProjects(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [sort]);

  return (
    <div id="projects" className="row mt-5 justify-content-center ">
      <div className="d-flex justify-content-center gap-2 align-items-center">
        <h1 className="text-center">{t("Projects.1")}</h1>
        <span>
          <BsFillInfoCircleFill className="ms-2" onClick={toggle} />
        </span>
        <div>
          <label>{t("Projects.2")}</label>
          <select
            className="filterby"
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="Default">{t("Projects.3")}</option>
            <option value="High">{t("Projects.4")}</option>
            <option value="Medium">{t("Projects.5")}</option>
            <option value="Low">{t("Projects.6")}</option>
          </select>
        </div>
      </div>
      <div>
        {loading ? (
          <div className="d-flex justify-content-center my-5">
            <Spinner animation="grow" variant="primary" />
          </div>
        ) : (
          projects.map((project) => {
            return (
              <div
                key={project.id}
                className="project col d-flex justify-content-around m-3 flex-wrap p-5 "
                data-aos="fade-up"
              >
                <div className="col-md-6 ">
                  <div className="d-flex">
                    <h1>{project.name}</h1>
                  </div>
                  <div>
                    <p className={clicked ? "aboutp aboutpshow " : "aboutp"}>
                      {project.description}
                    </p>
                  </div>
                  <span>{t("Projects.7")}</span>
                  {project.techsUsed?.map((tech, i) => {
                    return (
                      <div key={i} className="d-inline-flex">
                        <div className="projectBtn from-top m-1">{tech}</div>
                      </div>
                    );
                  })}
                </div>
                <div className="piccont">
                  <a href={project.link} target="_blank">
                    <img src={project.pic} alt="project" />
                    <div className="overlay ">
                      <div className="imgtext">Click to view!</div>
                    </div>
                  </a>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
