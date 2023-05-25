import { useEffect, useState, MouseEvent } from "react";
import styles from "./themeToggleButton.module.scss";
import { isBrowser } from "../../utils";
import { IconSun } from "../Icons/IconSun";
import { IconMoon } from "../Icons/IconMoon";

export const ThemeToggleButton = () => {
  const [theme, setTheme] = useState<"light" | "dark">(
    isBrowser &&
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light"
  );

  const toggleTheme = (theme: "light" | "dark") => {
    if (theme === "dark") {
      document.documentElement.classList.add("darkMode");
      document.documentElement.classList.remove("lightMode");
    } else {
      document.documentElement.classList.add("lightMode");
      document.documentElement.classList.remove("darkMode");
    }
  };

  useEffect(() => {
    toggleTheme(theme);
  }, [theme]);

  return (
    <div className={styles.themeToggleWrapper}>
      <label className={styles.themeSwitch}>
        <input
          type="checkbox"
          id="checkbox"
          onClick={(e: MouseEvent) => {
            setTheme(theme === "dark" ? "light" : "dark");
          }}
        />
        <div className={`${styles.slider} ${styles.round}`}></div>
      </label>
      {theme === "dark" ? <IconSun /> : <IconMoon />}
    </div>
  );
};
