import Post from "../Post/Post";
import avatar from "../../assets/images/sadi avatr.jpg";
import SameShape from "../SameShape/SameShape";
import { FaImage, FaCalendarDays, FaVideo } from "react-icons/fa6";
import { MdEmojiEmotions } from "react-icons/md";

const Posts = () => {
  return (
    <div className="mb-10">
      {/* Create Post */}
      <div className="mb-4">
        <SameShape>
          <div className="p-4 flex items-center gap-2 ">
            <img src={avatar} alt="" className="w-10 h-10 rounded-md" />
            <textarea
              name=""
              id=""
              placeholder="Share your thought..."
              className="w-full rounded-md px-3 text-black/50 text-base bg-white outline-none"
            ></textarea>
            <button className="bg-primary/5 py-1 px-2 rounded-md hover:bg-primary/10 transition-all duration-200">
              Post
            </button>
          </div>
          <div className="p-4 flex overflow-x-auto gap-4">
            <button className="flex items-center gap-1 bg-primary/5 py-1 px-2 rounded-md hover:bg-primary/10 transition-all duration-200">
              <FaImage className="text-[#0cbc87]" />{" "}
              <span className="text-xs md:text-sm">Photo</span>
            </button>
            <button className="flex items-center gap-1 bg-primary/5 py-1 px-2 rounded-md hover:bg-primary/10 transition-all duration-200">
              <FaVideo className="text-[#4f9ef8]" />{" "}
              <span className="text-xs md:text-sm">Video</span>
            </button>
            <button className="flex items-center gap-1 bg-primary/5 py-1 px-2 rounded-md hover:bg-primary/10 transition-all duration-200">
              <FaCalendarDays className="text-[#d6293e]" />{" "}
              <span className="text-xs md:text-sm">Event</span>
            </button>
            <button className="flex items-center gap-1 bg-primary/5 py-1 px-2 rounded-md hover:bg-primary/10 transition-all duration-200">
              <MdEmojiEmotions className="text-[#f7c43a]" />{" "}
              <span className="text-xs md:text-sm">Felling/Activity</span>
            </button>
          </div>
        </SameShape>
      </div>
      {/* Post Area */}
      <div>
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default Posts;
