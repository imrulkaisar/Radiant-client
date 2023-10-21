import Navbar from "../Components/Navbar";
import Topbar from "../Components/Topbar";

const Header = () => {
  return (
    <header className="dark:bg-slate-800">
      <Topbar />
      <Navbar />
    </header>
  );
};

export default Header;
