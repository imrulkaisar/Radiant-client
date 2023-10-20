import { Link, useNavigate } from "react-router-dom";
import PageHeader from "../Components/PageHeader";
import { useContext } from "react";
import { UserContext } from "../Contexts/UserContext";
import Swal from "sweetalert2";
import { apiURL } from "../Contexts/GlobalContext";
import SocialLogin from "../Components/SocialLogin";

const Register = () => {
  const { signUp, updateUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, photoURL, email, password } = e.target;

    if (password.value.length < 6) {
      Swal.fire({
        icon: "error",
        title: "Something wrong!",
        text: "Password length should be at least 6 characters.",
        showConfirmButton: false,
        showCloseButton: true,
      });
    } else if (!/[A-Z]/.test(password.value)) {
      Swal.fire({
        icon: "error",
        title: "Something wrong!",
        text: "Password must have one capital letter.",
        showConfirmButton: false,
        showCloseButton: true,
      });
    } else if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password.value)) {
      Swal.fire({
        icon: "error",
        title: "Something wrong!",
        text: "Password must have one special character.",
        showConfirmButton: false,
        showCloseButton: true,
      });
    } else {
      try {
        const res = await signUp(email.value, password.value);
        console.log(res.user);

        await updateUser({
          displayName: name.value,
          photoURL: photoURL.value,
        });

        const userInfo = await {
          name: name.value,
          email: email.value,
          photoURL: photoURL.value,
          cartItems: [],
        };

        await fetch(`${apiURL}/users`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              console.log("User add to the database!");
            }
          })
          .catch((error) => console.error(error));

        Swal.fire({
          icon: "success",
          title: "User created successfully!",
          showConfirmButton: false,
          showCloseButton: true,
        });

        navigate("/profile");
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <>
      <PageHeader title="Register" />
      <section className="py-16">
        <form
          className="max-w-lg mx-auto bg-white p-8 space-y-5 mt-10"
          onSubmit={handleSubmit}
        >
          <div className="form-group">
            <label htmlFor="name" className="sr-only">
              Full name
            </label>
            <input
              type="text"
              className="form-input"
              id="name"
              name="name"
              placeholder="Full name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="photoURL" className="sr-only">
              Photo URL
            </label>
            <input
              type="text"
              className="form-input"
              id="photoURL"
              name="photoURL"
              placeholder="Photo URL"
            />
          </div>
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
            Register
          </button>
        </form>
        <div className="container-area pt-8 flex justify-center items-center gap-5">
          <SocialLogin />
        </div>
        <p className="text-center py-10">
          Already have an account? Please{" "}
          <Link
            className="hover:text-secondary font-bold text-primary"
            to="/login"
          >
            Login here
          </Link>
          .
        </p>
      </section>
    </>
  );
};

export default Register;
