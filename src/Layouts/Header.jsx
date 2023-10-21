import MobileHeader from "../Components/MobileHeader";
import Navbar from "../Components/Navbar";
import Topbar from "../Components/Topbar";

const Header = () => {
  return (
    <header className="dark:bg-slate-800">
      <div className="hidden md:block">
        <Topbar />
        <Navbar />
      </div>
      <div className="block md:hidden">
        <MobileHeader />
      </div>
    </header>
  );
};

export default Header;
