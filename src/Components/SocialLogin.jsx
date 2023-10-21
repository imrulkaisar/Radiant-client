import { useContext } from "react";
import { UserContext } from "../Contexts/UserContext";
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { apiURL } from "../Contexts/GlobalContext";
import { DataContext } from "../Contexts/DataContext";

const SocialLogin = () => {
  const { googleSignIn } = useContext(UserContext);
  const { users } = useContext(DataContext);
  const navigate = useNavigate();
  const { state } = useLocation();

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((res) => {
        const { displayName, email, photoURL } = res.user;
        console.log(displayName, "logged in successfully!");

        const matchedUser = users.filter((user) => user.email === email);

        if (matchedUser.length === 0) {
          const userInfo = {
            name: displayName,
            email,
            photoURL,
            cartItems: [],
          };

          fetch(`${apiURL}/users`, {
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
        }

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
    <div>
      <button
        className="btn btn-primary dark:bg-black dark:text-white dark:hover:text-secondary"
        onClick={handleGoogleSignIn}
      >
        <FcGoogle className="text-xl" /> Login With Google
      </button>
    </div>
  );
};

export default SocialLogin;
