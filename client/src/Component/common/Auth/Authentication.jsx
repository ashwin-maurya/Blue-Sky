import { useRef, useState, useContext, useEffect } from "react";
import { auth } from "../../../Assets/images";
import "react-toastify/dist/ReactToastify.css";
import AuthContext from "../../../Helper/Context/AuthContext";
import Login from "./Login";
import Register from "./Register";
import { GoogleSignInAPI } from "../../../api/AuthAPI";
import { toast } from "react-toastify";

export default function Authentication(props) {
  const context = useContext(AuthContext);
  const {
    setAuthStatus,
    UserExistStatus,
    userexist,
    loggedin,
    googlelogin,
    loggedinStatus,
    googlesignup,
  } = context;
  const [GooogleCreds, setGooogleCreds] = useState({});

  const { ModalStatus } = props;
  const modalRef = useRef(null);
  const [sign, setSign] = useState(true);

  const handleOutsideClick = (event) => {
    if (modalRef.current === event.target) {
      ModalStatus();
    }
  };

  useEffect(() => {
    if (loggedinStatus) {
      if (loggedin.success) {
        localStorage.setItem("UserData", JSON.stringify(loggedin));
        ModalStatus();
        setAuthStatus(true);
        toast.success("Account Loggedin Succesfully");
      } else {
        toast.error("Invalid Credentials");
      }
    }
  }, [loggedinStatus]);

  const goolesignin = async () => {
    let res = await GoogleSignInAPI();
    console.log(res);
    if (res) {
      const parts = res.user.email.split("@");
      const username = parts[0];
      const input = {
        name: res.user.displayName,
        email: res.user.email,
        username: username,
      };
      setGooogleCreds(input);
      userexist(input.email);
    }
  };
  useEffect(() => {
    if (UserExistStatus) {
      googlelogin(GooogleCreds);
    } else if (UserExistStatus == false) {
      googlesignup(GooogleCreds);
    }
  }, [UserExistStatus]);

  return (
    <>
      <div
        id="myModal"
        className="fixed z-50 inset-0 flex items-center transition-all ease-in-out duration-300 justify-center backdrop-blur-sm bg-Opacityblack"
        ref={modalRef}
        onClick={handleOutsideClick}
      >
        <div className="w-1/2 max-lg:w-[90%] flex rounded-lg bg-white dark:bg-darkBgPrimary shadow-xl overflow-hidden">
          <div className="flex items-center w-[50%] h-[auto]  bg-[#d1e3ff] dark:bg-[#ffd4bb] max-lg:hidden">
            <img src={auth} alt="girl-reading-a-book" />
          </div>

          {sign ? (
            <Login
              ModalStatus={ModalStatus}
              setSign={setSign}
              goolesignin={goolesignin}
            />
          ) : (
            <Register
              ModalStatus={ModalStatus}
              setAuthStatus={setAuthStatus}
              setSign={setSign}
              goolesignin={goolesignin}
            />
          )}
        </div>
      </div>
    </>
  );
}
