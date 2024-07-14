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
        </div>
      </SameShape>
    </div>
  );
};

export default Widget;
