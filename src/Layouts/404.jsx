import { Link } from "react-router-dom";
import PageHeader from "../Components/PageHeader";
import { MdOutlineLocationSearching } from "react-icons/md";

const NotFound = () => {
  return (
    <div>
      <PageHeader title="Page Not found" />
      <section className="py-16">
        <div className="py-5 flex flex-col items-center justify-center gap-10 max-w-lg mx-auto">
          <MdOutlineLocationSearching className="text-9xl text-gray-300" />
          <p className="text-4xl text-center font-normal text-primary">
            404 Page Not found!
          </p>
          <Link className="btn btn-primary" to="/">
            Go to Home page
          </Link>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
