import { useContext } from "react";
import { UserContext } from "../Contexts/UserContext";
import PageHeader from "../Components/PageHeader";
import { NavLink, useNavigate } from "react-router-dom";

const Profile = () => {
  const { user, logOut } = useContext(UserContext);
  const {
    displayName,
    photoURL,
    email,
    metadata: { creationTime, lastSignInTime },
  } = user || {};
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
      .then((res) => {
        console.log("Logged out successfully!");
        navigate("/login");
      })
      .catch((error) => console.error(error));
  };
  return (
    <>
      <PageHeader title="Profile" />
      <section className="py-16">
        <div className="container-area max-w-4xl flex gap-2">
          <div className="vertical-menu w-52">
            <ul className="space-y-1">
              <li>
                <NavLink
                  className="block text-center uppercase py-2 tracking-wider bg-gray-300"
                  to="/profile"
                >
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="block text-center uppercase py-2 tracking-wider bg-gray-300"
                  to="/update-profile"
                >
                  Profile
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="block text-center uppercase py-2 tracking-wider bg-gray-300"
                  to="/profile/products"
                >
                  Products
                </NavLink>
              </li>
              <li>
                <button
                  onClick={handleLogOut}
                  className="block text-center uppercase p-2 tracking-wider bg-black text-white w-full"
                >
                  Log out
                </button>
              </li>
            </ul>
          </div>
          <div className="content bg-white p-8 flex-1 space-y-8">
            <img className="w-28" src={photoURL} alt="" />
            {/* table */}
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <tbody>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white capitalize"
                    >
                      Full name:
                    </th>
                    <td className="px-6 py-4">{displayName}</td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white capitalize"
                    >
                      Email Address:
                    </th>
                    <td className="px-6 py-4">{email}</td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white capitalize"
                    >
                      Profile Created:
                    </th>
                    <td className="px-6 py-4">{creationTime}</td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white capitalize"
                    >
                      Last Login:
                    </th>
                    <td className="px-6 py-4">{lastSignInTime}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
