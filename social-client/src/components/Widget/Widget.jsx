import { Link } from "react-router-dom";
import SameShape from "../SameShape/SameShape";
import SuggestedUserWidgetItem from "../SuggestedUserWidgetItem/SuggestedUserWidgetItem";

const Widget = () => {
  return (
    <div>
      {/* Suggested User Info */}
      <SameShape>
        <div className="p-4">
          <h2 className="font-bold text-black mb-2">Who to follow</h2>
          {/* Suggest User Area */}
          <div className="flex flex-col gap-3">
            <SuggestedUserWidgetItem />
            <SuggestedUserWidgetItem />
            <SuggestedUserWidgetItem />
            <SuggestedUserWidgetItem />
            <SuggestedUserWidgetItem />
          </div>
          <div className="text-center">
            <Link className="mt-3 inline-block w-full py-1 text-sm rounded-md bg-primary/5 text-primary hover:bg-primary hover:text-white transition-all duration-200">
              View More
            </Link>
          </div>
        </div>
      </SameShape>
    </div>
  );
};

export default Widget;
