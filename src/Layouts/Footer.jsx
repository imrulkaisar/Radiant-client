import IconListItem from "../Components/IconListItem";
import Logo from "../Components/Logo";
import SocialIcons from "../Components/SocialIcons";
import { FiPhone, FiMail, FiMapPin, FiClock } from "react-icons/fi";
import { contactInfo } from "../Contexts/GlobalContext";
import { Link } from "react-router-dom";
// import bgStructure from "../assets/Images/bg-structure.png";
import PreFooter from "../Components/PreFooter";

const Footer = () => {
  return (
    <>
      <PreFooter />
      <footer
        style={{
          // backgroundImage: `url(${bgStructure})`,
          backgroundColor: "#ffffff",
          backgroundRepeat: "repeat",
          backgroundPosition: "center center",
          backgroundSize: "290px auto",
        }}
        className="border-t pt-8 bg-[url('https://tinyurl.com/4emfuwhz')] dark:bg-[url('https://tinyurl.com/mpcy6fma')]"
      >
        <div className="container-area bg-[rgba(0, 0, 0, 0.5)]">
          <div className="py-10 flex flex-col md:flex-row gap-8 justify-between items-center md:order-1">
            <div className="flex-1 w-full order-1">
              <ul className="text-text flex flex-col items-center md:items-start text-sm space-y-3">
                <IconListItem
                  icon={<FiPhone />}
                  link={`tel:${contactInfo.phone}`}
                >
                  {contactInfo.phone}
                </IconListItem>
                <IconListItem
                  icon={<FiMail />}
                  link={`tel:${contactInfo.email}`}
                >
                  {contactInfo.email}
                </IconListItem>
                <IconListItem icon={<FiMapPin />}>
                  {contactInfo.address}
                </IconListItem>
                <IconListItem icon={<FiClock />}>
                  {contactInfo.hours}
                </IconListItem>
              </ul>
            </div>
            <div className="flex flex-col flex-1 gap-3 items-center w-full  md:order-1">
              <Logo />
              <SocialIcons className="text-text gap-8 text-2xl" />
            </div>
            <div className="flex-1 text-center md:text-right order-2 md:order-1">
              <p className="pb-4">
                Our formulas are made with natural, organic, and cruelty-free
                ingredients that are gentle, effective, and good for you and the
                environment.
              </p>
              <Link className="btn p-0 inline border-0 dark:text-white">
                Read more
              </Link>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between text-sm pb-5">
            <p>© 2023 Radiant. All rights reserved.</p>
            <p>Developed by Imrul Kaisar</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
