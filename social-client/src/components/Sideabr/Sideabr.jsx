import { Link } from "react-router-dom";
import cover from "../../assets/images/cover-social.jpg";
import avatar from "../../assets/images/sadi avatr.jpg";
import homeSvg from "../../assets/svg/home-outline-filled.svg";
import userConnect from "../../assets/svg/person-outline-filled.svg";
// import leatestPost from "../../assets/svg/earth-outline-filled.svg";
import eventSvg from "../../assets/svg/calendar-outline-filled.svg";
import notificationSvg from "../../assets/svg/notification-outlined-filled.svg";
import settingSvg from "../../assets/svg/cog-outline-filled.svg";
import SameShape from "../SameShape/SameShape";
const Sideabr = () => {
  return (
    <div className="mb-10">
      <SameShape>
        {/* User Info */}
        <div>
          <Link to="/profile/hammadsadi" className="relative">
            <img
              src={cover}
              alt=""
              className="rounded-md h-20 w-full object-cover"
            />
            <img
              src={avatar}
              alt=""
              className="h-20 absolute top-1/2 left-1/2 -translate-x-1/2 rounded-md bg-white p-1"
            />
          </Link>
          <div className="relative mt-12 text-center p-4">
            <h2 className="text-black font-bold text-lg">Hammad Sadi</h2>
            <h4 className="text-black/50 text-[12px] font-normal">
              @hammadsadi
            </h4>
            <p className="text-sm text-black/50 font-light mt-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae,
              maxime.
            </p>
            <div className="mt-2 grid grid-cols-3 text-black border-b pb-4">
              <div className=" border-r">
                <p className="text-lg font-bold">200</p>
                <p className="text-sm text-black/50">Posts</p>
              </div>
              <div className=" border-r ">
                <p className="text-lg font-bold">200</p>
                <p className="text-sm text-black/50">Followers</p>
              </div>
              <div>
                <p className="text-lg font-bold">200</p>
                <p className="text-sm text-black/50">Following</p>
              </div>
            </div>
          </div>
        </div>

        {/* Extra More Info */}
        <div className="p-4 text-black space-y-4">
          <Link className="flex items-center gap-2 ">
            <img src={homeSvg} alt="" className="w-5" />
            <span className="text-base ">Feed</span>
          </Link>
          <Link className="flex items-center gap-2 ">
            <img src={userConnect} alt="" className="w-5" />
            <span className="text-base t">Connection </span>
          </Link>
          <Link className="flex items-center gap-2 ">
            <img src={eventSvg} alt="" className="w-5" />
            <span className="text-base t">Event</span>
          </Link>
          <Link className="flex items-center gap-2 ">
            <img src={notificationSvg} alt="" className="w-5" />
            <span className="text-base t">Notifications</span>
          </Link>
          <Link className="flex items-center gap-2 ">
            <img src={settingSvg} alt="" className="w-5" />
            <span className="text-base t">Settings</span>
          </Link>
        </div>
        <div className="border-t text-center">
          <Link className="inline-block p-2">
            <span className="text-sm font-normal text-primary">
              View Profile
            </span>
          </Link>
        </div>
      </SameShape>

      <ul className="flex flex-wrap justify-between items-center p-4">
        <li>
          <Link className="text-sm font-normal">About</Link>
        </li>
        <li>
          <Link className="text-sm font-normal">Setting</Link>
        </li>
        <li>
          <Link className="text-sm font-normal">Support</Link>
        </li>
        <li>
          <Link className="text-sm font-normal">Privacy</Link>
        </li>
        <li>
          <Link className="text-sm font-normal">Terms & Conditions</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sideabr;
