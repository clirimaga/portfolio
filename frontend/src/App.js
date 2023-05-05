import "./App.css";
import Hero from "./components/Hero";
import Navigator from "./components/Navigator";
import TechSkills from "./components/TechSkills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ScrollToTop from "react-scroll-to-top";
import ScrollBarIndicator from "./components/ScrollBarIndicator";
import { createContext, useState } from "react";
import { useTranslation } from "react-i18next";
import Sidebar from "./components/Sidebar";
import ScrollToTopButton from "./components/ScrollToTopButton";
export const Context = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");
  const [lang, setLang] = useState("en");
  const { t, i18n } = useTranslation();
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  const toggleLang = (lang) => {
    setLang(lang);
    i18n.changeLanguage(lang);
  };
  return (
    <div>
      <ScrollBarIndicator className="container-fluid" />
      <Context.Provider value={{ theme, toggleTheme, lang, toggleLang }}>
        <div id={theme}>
          <header>
            <Navigator />
          </header>
          <main>
            <Hero />
            <TechSkills />
            <Projects />
            {/* <ScrollToTop smooth /> */}
            <ScrollToTopButton />
            <Sidebar />
          </main>
          <Contact />
        </div>
      </Context.Provider>
    </div>
  );
}

export default App;

//imports
// import { useCallback } from "react";
// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";

// inside the function
//   const particlesInit = useCallback(async engine => {
//     console.log(engine);
//     await loadFull(engine);
// }, []);

// const particlesLoaded = useCallback(async container => {
//     await console.log(container);
// }, []);

//after return
{
  /* <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#0c55a7",
                    },
                    links: {
                        color: "#000",
                        distance: 150,
                        enable: true,
                        opacity: 0.,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        directions: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 1,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "star",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        /> */
}
