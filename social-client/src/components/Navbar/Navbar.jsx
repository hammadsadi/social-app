import { Link } from "react-router-dom";
import { RiNotification2Line } from "react-icons/ri";
import avatar from "../../assets/images/sadi avatr.jpg";
const Navbar = () => {
  return (
    <nav className="shadow-md bg-white fixed w-full top-0 z-20">
      <div className="container mx-auto flex justify-between items-center py-3">
        <Link to="/" className="text-primary font-fontHr md:text-2xl text-lg">
          Ummah
        </Link>
        {/* Search Filed */}
        <div className="hidden md:block">
          <div className="relative">
            <label htmlFor="Search" className="sr-only">
              {" "}
              Search{" "}
            </label>

            <input
              type="text"
              id="Search"
              placeholder="Search for..."
              className="w-full rounded-md outline-none bg-slate-100 text-black/50 py-2.5 pe-10 pl-4 shadow-sm sm:text-sm"
            />

            <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
              <button
                type="button"
                className="text-black/50  hover:text-black/60"
              >
                <span className="sr-only">Search</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </button>
            </span>
          </div>
        </div>
        {/* User Info */}
        <div className="flex justify-center items-center gap-4">
          <button>
            <RiNotification2Line className="text-lg text-black/50 hover:text-black/60" />
          </button>
          <Link>
            {" "}
            <img src={avatar} alt="" className="w-10 h-10 rounded-md" />{" "}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
