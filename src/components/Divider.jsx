// src/components/Divider.jsx
import React from "react";
import PropTypes from "prop-types";

const Divider = ({
  color = "gray-300",
  thickness = "1px",
  width = "full",
  height = "0.5px",
  orientation = "horizontal",
  marginY = "4",
  marginX = "0",
}) => {
  return (
    <div className={`flex justify-center my-${marginY}`}>
      <span
        className={`w-${width} border-t border-${color}`}
        style={{ borderWidth: thickness }}
      ></span>
    </div>
  );
};

Divider.propTypes = {
  color: PropTypes.string,
  thickness: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  orientation: PropTypes.oneOf(["horizontal", "vertical"]),
  marginY: PropTypes.string,
  marginX: PropTypes.string,
};

export default Divider;
