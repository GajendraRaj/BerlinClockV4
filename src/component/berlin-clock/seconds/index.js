import React from "react";
import PropTypes from "prop-types";
import Constants from "../../../constant";

const Seconds = (props) => {
  const secondsColor =
    props.seconds === Constants.EVEN_SECOND
      ? Constants.ACTIVE_STYLE_CLASS
      : Constants.OFF_STYLE_CLASS;

  return (
    <div className={`${Constants.SECONDS_STYLE_CLASS} ${secondsColor}`}></div>
  );
};

Seconds.propTypes = {
  seconds: PropTypes.string.isRequired,
};

export default Seconds;
