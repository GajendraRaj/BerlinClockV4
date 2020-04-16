import React from "react";
import PropTypes from "prop-types";
import Constants from "../../../../constant";

const Minute = (props) => {
  const minuteColor = (minute) => {
    if (minute === Constants.ACTIVE_YELLOW_COLOR) {
      return Constants.ACTIVE_STYLE_CLASS;
    } else if (minute === Constants.ACTIVE_COLOR) {
      return Constants.RED_STYLE_CLASS;
    } else {
      return Constants.OFF_STYLE_CLASS;
    }
  };

  return (
    <div
      key={props.index}
      className={`${Constants.MINUTES_ROWS_STYLE_CLASS} ${minuteColor(
        props.minute
      )}`}
      style={{
        width: props.rowId === 0 ? "9%" : "25%",
      }}
    />
  );
};

Minute.propTypes = {
  index: PropTypes.number.isRequired,
  minute: PropTypes.string.isRequired,
  rowId: PropTypes.number.isRequired,
};

export default Minute;
