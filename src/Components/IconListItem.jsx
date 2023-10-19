import { Link } from "react-router-dom";

const IconListItem = ({ icon, link, children }) => {
  return (
    <Link to={link} className="flex gap-1 items-center hover:text-primary">
      {icon}
      {children}
    </Link>
  );
};

export default IconListItem;
