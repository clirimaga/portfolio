import React from "react";

import { useContext } from "react";
import { MdLightbulbOutline, MdDarkMode } from "react-icons/md";
import { Context } from "../App";
import { useTranslation } from "react-i18next";

export default function Sidebar() {
  const { toggleTheme, theme, lang, toggleLang } = useContext(Context);
  const { t } = useTranslation();
  return (
    <div className="sidebar d-flex flex-column justify-content-center">
      {theme === "light" ? (
        <MdDarkMode onClick={toggleTheme} className="lightdarkicon" />
      ) : (
        <MdLightbulbOutline onClick={toggleTheme} className="lightdarkicon" />
      )}
      {lang === "en" ? (
        <button className="langselect" onClick={() => toggleLang("de")}>
          DE
        </button>
      ) : (
        <button className="langselect" onClick={() => toggleLang("en")}>
          EN
        </button>
      )}
    </div>
  );
}
