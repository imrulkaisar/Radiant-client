import { Link, useLocation, useNavigate } from "react-router-dom";
import PageHeader from "../Components/PageHeader";
import { useContext } from "react";
import { UserContext } from "../Contexts/UserContext";
import Swal from "sweetalert2";
import SocialLogin from "../Components/SocialLogin";

const Login = () => {
  const { login } = useContext(UserContext);
  const navigate = useNavigate();
  const { state } = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then((res) => {
        console.log(res.user.email, "logged in successfully!");
        navigate(state ? state : "/profile");
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          icon: "error",
          title: "Something wrong!",
          text: error.message,
          showConfirmButton: false,
          showCloseButton: true,
        });
      });
  };
  return (
    <>
      <PageHeader title="Login" />
      <section className="py-16">
        <form
          className="max-w-lg mx-auto bg-white p-8 space-y-5 mt-10"
          onSubmit={handleSubmit}
        >
          <div className="form-group">
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              type="email"
              className="form-input"
              id="email"
              name="email"
              placeholder="Email Address"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              type="password"
              className="form-input"
              id="password"
              name="password"
              placeholder="Password"
            />
          </div>
          <button type="submit" className="btn btn-secondary w-full">
            Login
          </button>
        </form>
        <div className="container-area pt-8 flex justify-center items-center gap-5">
          <SocialLogin />
        </div>
        <p className="text-center py-10">
          Don't have an account? Please{" "}
          <Link
            className="hover:text-secondary font-bold text-primary"
            to="/register"
          >
            Register here
          </Link>
          .
        </p>
      </section>
    </>
  );
};

export default Login;
