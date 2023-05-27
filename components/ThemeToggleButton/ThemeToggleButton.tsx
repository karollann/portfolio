import { useEffect, useState, MouseEvent, useLayoutEffect } from "react";
import { useTheme } from "next-themes";
import styles from "./themeToggleButton.module.scss";
import { isBrowser } from "../../utils";
import { IconSun } from "../Icons/IconSun";
import { IconMoon } from "../Icons/IconMoon";

export const ThemeToggleButton = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className={styles.themeToggleWrapper}>
      <label className={styles.themeSwitch}>
        <input
          type="checkbox"
          id="checkbox"
          onClick={() => {
            setTheme(theme === "dark" ? "light" : "dark");
          }}
        />
        <div className={`${styles.slider} ${styles.round}`}></div>
      </label>
      {theme === "dark" ? <IconSun /> : <IconMoon />}
    </div>
  );
};
