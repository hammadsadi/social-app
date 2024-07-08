import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo-sign-up.png";
import { FaUser } from "react-icons/fa";
import { MdPassword } from "react-icons/md";
const SignIn = () => {
  return (
    <div className="max-w-screen-xl mx-auto flex h-screen px-10">
      <div className="flex-1 hidden lg:flex items-center  justify-center">
        {/* <XSvg className=" lg:w-2/3 fill-white" />
         */}
        <div>
          {/* <h2 className="text-center">The Ummah</h2>
          <p>islamic community</p> */}
          <img src={logo} alt="" />
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-center items-center">
        <form
          className="lg:w-2/3  mx-auto md:mx-20 flex gap-4 flex-col"
          //   onSubmit={handleSubmit}
        >
          {/* fdteet */}
          <h1 className="text-4xl font-extrabold text-white">Sign In Now.</h1>

          <div className="flex gap-4 flex-wrap">
            <label className="input input-bordered rounded flex items-center gap-2 flex-1">
              <FaUser />
              <input
                type="text"
                className="grow "
                placeholder="Username"
                name="username"
              />
            </label>
          </div>
          <label className="input input-bordered rounded flex items-center gap-2">
            <MdPassword />
            <input
              type="password"
              className="grow"
              placeholder="Password"
              name="password"
            />
          </label>
          <button className="btn rounded-full btn-primary text-gray-900">
            Sign In
          </button>
        </form>
        <div className="flex flex-col lg:w-2/3 gap-2 mt-4">
          <p className="text-white text-lg">Dont have an account?</p>
          <Link to="/sign-up">
            <button className="btn rounded-full btn-primary text-white btn-outline w-full">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
