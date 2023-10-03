import React from "react";
import { useState, useEffect } from "react";
import axiosClient from "./axiosClient";
import { useTranslation } from "react-i18next";
import "./components.css";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { RiExternalLinkLine } from "react-icons/ri";
import Spinner from "react-bootstrap/Spinner";

import AOS from "aos";
import "aos/dist/aos.css";
import New from "./UI/Badge";
export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [clicked, setClicked] = useState(true);
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

  // sort projects everytime SORT changes depending on complexity

  return (
    <section id="projects" className="row mt-5 justify-content-center ">
      <div className="d-flex justify-content-center gap-2 align-items-center">
        <h1 className="text-center">{t("Projects.1")}</h1>
        <span>
          <BsFillInfoCircleFill
            className="info ms-2"
            title="info"
            onClick={toggle}
          />
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
                className="project col d-flex justify-content-around flex-wrap p-5 "
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
                <div
                  style={{
                    backgroundImage: `url(${project.pic})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                  className="piccont"
                >
                  {project.link &&  <a href={project.link} id="link1" rel="noopener noreferrer"  target="_blank" >
                    <h1 className="imgtext">
                      See it Live
                      <RiExternalLinkLine />
                    </h1>
                  </a> }
                    {/* <Badge>new</Badge> */}
                  {project.code &&  <a href={project.code} id="link2" rel="noopener noreferrer" target="_blank">
                    <div className="imgtext">
                      See the Code
                      <RiExternalLinkLine />
                    </div>
                  </a>
          }
                </div>
              </div>
            );
          })
        )}
      </div>
    </section>
  );
}
