import { Link } from "react-router-dom";
import avatar from "../../assets/images/sadi avatr.jpg";
import { FaPlus } from "react-icons/fa";
const SuggestedUserWidgetItem = () => {
  return (
    <div className="flex justify-between items-center">
      <Link>
        <img src={avatar} className="w-10 h-10 rounded-md" alt="" />
      </Link>
      <div>
        <Link className="text-sm font-bold text-black">Hammad Sadi</Link>
        <p className="text-xs">Web Developer</p>
      </div>
      <button className="w-8 h-8 rounded-full flex justify-center items-center bg-primary/5 text-primary hover:bg-primary hover:text-white transition-all duration-200">
        <FaPlus />
      </button>
    </div>
  );
};

export default SuggestedUserWidgetItem;
