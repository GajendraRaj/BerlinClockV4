import React from "react";
import PropTypes from "prop-types";
import Constants from "../../../../constant";

const Hour = (props) => {
  const hourColor = (hour) =>
    hour === Constants.ACTIVE_HOURS_COLOR
      ? Constants.RED_STYLE_CLASS
      : Constants.OFF_STYLE_CLASS;

  return (
    <div
      key={props.index}
      className={`${Constants.HOURS_ROWS_STYLE_CLASS} ${hourColor(props.hour)}`}
      style={{ width: "25%" }}
    />
  );
};

Hour.propTypes = {
  index: PropTypes.number.isRequired,
  hour: PropTypes.string.isRequired,
};

export default Hour;
