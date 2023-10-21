import IconListItem from "./IconListItem";
import SocialIcons from "./SocialIcons";
import { contactInfo } from "../Contexts/GlobalContext";
import { FiPhone, FiMail, FiMapPin, FiMoon, FiSun } from "react-icons/fi";
import { useEffect, useState } from "react";

const Topbar = () => {
  const [theme, setTheme] = useState(null);
  const [toggle, SetToggle] = useState(true);

  useEffect(() => {
    if (window.matchMedia("prefers-color-scheme: dark").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    SetToggle(!toggle);
  };

  return (
    <div className="py-2 bg-grayBg dark:bg-gray-950">
      <div className="container-area flex justify-between items-center">
        <SocialIcons className="text-text gap-4 text-lg" />
        <div className="flex gap-5 items-center">
          <ul className="text-text text-sm flex gap-3">
            <IconListItem icon={<FiPhone />} link={`tel:${contactInfo.phone}`}>
              {contactInfo.phone}
            </IconListItem>
            <IconListItem icon={<FiMail />} link={`tel:${contactInfo.email}`}>
              {contactInfo.email}
            </IconListItem>
            <IconListItem icon={<FiMapPin />}>
              {contactInfo.address}
            </IconListItem>
          </ul>
          <div>
            <button
              onClick={handleThemeSwitch}
              className="border border-gray-300 p-2 text-lg rounded-full hover:bg-black hover:border-black hover:text-white dark:text-white dark:bg-gray-600"
            >
              {toggle ? <FiMoon /> : <FiSun />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
