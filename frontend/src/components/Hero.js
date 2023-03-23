import React from "react";
import MyCard from "./MyCard";
import About from "./About";
import "./components.css";

export default function Hero() {
  return (
    <div className="row mt-5 justify-content-center">
      <MyCard />
      <About />
    </div>
  );
}
