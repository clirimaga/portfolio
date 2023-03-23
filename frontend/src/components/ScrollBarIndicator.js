import { useState, useEffect } from "react";
import "./components.css";

export default function ScrollBarIndicator() {
  const [scrollTop, setScrollTop] = useState(0);

  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    setScrollTop(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="progressWrapper">
      <div className="progressStyle" style={{ width: `${scrollTop}%` }}></div>
    </div>
  );
}
