import { useState, useEffect } from "react";
import "./components.css";
import { BsArrowUp } from "react-icons/bs";
export default function ScrollToTopButton() {
  const [scrollTop, setScrollTop] = useState(0);
  const [visible,setVisible] = useState(false);
 
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 70) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  return (
    <>
    {visible && (<button onClick={scrollToTop} className="scrollButton" >
      <BsArrowUp className="arrow" />
    </button>) }
    </>
  );
}
