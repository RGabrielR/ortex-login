import { useLocation, useNavigate } from "react-router-dom";
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
const LoginInfo = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { email, password } = location.state;
  return (
    <>
      <div className="bg-black">
        <i
          onClick={() => navigate(-1)}
          className="fas fa-long-arrow-alt-left fa-5x cursor-pointer icon pl-5"
        ></i>
        <div className="  min-w-min min-h-screen  flex flex-col justify-center items-center">
          <p className="custominfo text-3xl text-white cursor-default">
            <strong className="font-bold ">email:</strong> {email}
          </p>
          <p className="custominfo text-3xl text-white cursor-default">
            <strong className="font-bold">password:</strong> {password}
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginInfo;
