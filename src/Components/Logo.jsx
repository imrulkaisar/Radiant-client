import { Link } from "react-router-dom";
import logoImage from "../assets/Images/logo.png";

const Logo = () => {
  return (
    <Link to="/">
      <img className="max-w-xs w-56" src={logoImage} alt="radiant logo" />
    </Link>
  );
};

export default Logo;
