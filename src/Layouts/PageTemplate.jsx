import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const PageTemplate = () => {
  return (
    <>
      <Header />
      <main className="min-h-[400px] bg-[#f3f3f3]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default PageTemplate;
