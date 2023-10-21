import { Link } from "react-router-dom";
// import backgroundImg from "../assets/Images/page-header.bg.jpg";

const PageHeader = ({ title, steps = [] }) => {
  return (
    <div className="bg-[url('https://tinyurl.com/mr4bxj42')] dark:bg-[url('https://tinyurl.com/4kr7vak9')] bg-center flex justify-center items-center min-h-[200px]">
      <div className="container-area flex flex-col gap-5 justify-center items-center">
        <h1 className="text-white uppercase text-5xl tracking-[3px]">
          {title}
        </h1>

        {/* breadcomes */}
        <nav className="flex text-white" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link
                to="/"
                className="inline-flex items-center text-sm font-medium"
              >
                <svg
                  className="w-3 h-3 mr-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#FFF"
                  viewBox="0 0 20 20"
                >
                  <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                </svg>
                Home
              </Link>
            </li>

            {/* steps */}
            {steps.length > 0 &&
              steps.map((step, index) => (
                <li key={index}>
                  <div className="flex items-center">
                    <svg
                      className="w-3 h-3 text-gray-400 mx-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="m1 9 4-4-4-4"
                      />
                    </svg>
                    <Link to={step.link} className="ml-1 text-sm font-medium">
                      {step.title}
                    </Link>
                  </div>
                </li>
              ))}

            {/* list title */}
            <li aria-current="page">
              <div className="flex items-center">
                <svg
                  className="w-3 h-3 text-gray-400 mx-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <span className="ml-1 text-sm font-medium">{title}</span>
              </div>
            </li>
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default PageHeader;
