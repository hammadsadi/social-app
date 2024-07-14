import PropTypes from "prop-types";
const SameShape = ({ children }) => {
  return (
    <div className="bg-white text-black/50  rounded-md border border-gray-200">
      {children}
    </div>
  );
};

SameShape.propTypes = {
  children: PropTypes.node,
};
export default SameShape;
