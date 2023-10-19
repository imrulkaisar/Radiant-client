import IconListItem from "./IconListItem";
import SocialIcons from "./SocialIcons";
import { contactInfo } from "../Contexts/GlobalContext";
import { FiPhone, FiMail, FiMapPin, FiMoon } from "react-icons/fi";

const Topbar = () => {
  return (
    <div className="py-2 bg-grayBg">
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
            <button className="border border-gray-300 p-2 text-lg rounded-full hover:bg-black hover:border-black hover:text-white">
              <FiMoon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
