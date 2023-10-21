import { Link } from "react-router-dom";
import logoImage from "../assets/Images/logo.png";

const Logo = () => {
  return (
    <Link to="/">
      <img className="w-36 md:w-48" src={logoImage} alt="radiant logo" />
    </Link>
  );
};

export default Logo;
