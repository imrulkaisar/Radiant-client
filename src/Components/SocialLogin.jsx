import { useContext } from "react";
import { UserContext } from "../Contexts/UserContext";
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SocialLogin = () => {
  const { googleSignIn } = useContext(UserContext);
  const navigate = useNavigate();
  const { state } = useLocation();

  const handleGoogleSignIn = () => {
    googleSignIn()
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
    <div>
      <button className="btn btn-primary" onClick={handleGoogleSignIn}>
        <FcGoogle className="text-xl" /> Login With Google
      </button>
    </div>
  );
};

export default SocialLogin;
