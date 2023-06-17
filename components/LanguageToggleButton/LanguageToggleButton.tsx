import { useTranslation } from "next-i18next";
import { IconPolishFlag } from "../Icons/IconPolishFlag";
import { IconUKFlag } from "../Icons/IconUKFlag";
import styles from "./languageToggleButton.module.scss";

export const LanguageToggleButton = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  return (
    <button
      className={styles.languageToggleButton}
      onClick={() =>
        i18n.changeLanguage(currentLanguage === "en" ? "pl" : "en")
      }
    >
      {currentLanguage === "en" ? (
        <IconPolishFlag width={"22px"} height={"22px"} />
      ) : (
        <IconUKFlag width={"22px"} height={"22px"} />
      )}
    </button>
  );
};
