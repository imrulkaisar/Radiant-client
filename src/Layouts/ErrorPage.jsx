import { Link } from "react-router-dom";
import PageHeader from "../Components/PageHeader";
import { BiError } from "react-icons/bi";

const ErrorPage = () => {
  return (
    <div>
      <PageHeader title="Error" />
      <section className="py-16">
        <div className="py-5 flex flex-col items-center justify-center gap-10 max-w-lg mx-auto">
          <BiError className="text-9xl text-gray-300" />
          <p className="text-4xl text-center font-normal text-primary">
            Something wrong!
          </p>
          <Link className="btn btn-primary" to="/">
            Go to Home page
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ErrorPage;
