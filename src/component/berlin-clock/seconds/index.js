import React from "react";
import PropTypes from "prop-types";

const Seconds = (props) => {
  const secondsColor = props.seconds === "Y" ? "bg-yellow" : "";

  return <div className={`seconds ${secondsColor}`}></div>;
};

Seconds.propTypes = {
  seconds: PropTypes.string.isRequired,
};

export default Seconds;
