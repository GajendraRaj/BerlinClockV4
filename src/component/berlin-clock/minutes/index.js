import React from "react";
import PropTypes from "prop-types";
import Constants from "../../../constant";

const Minutes = (props) => {
  const minutes = props.minutes;
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
    <div>
      {minutes.map((minutes, rowId) => (
        <div key={rowId} className={Constants.MINUTES_STYLE_CLASS}>
          {minutes &&
            minutes.split("").map((minute, index) => (
              <div
                key={index}
                className={`${Constants.MINUTES_ROWS_STYLE_CLASS} ${minuteColor(
                  minute
                )}`}
                style={{
                  width: rowId === 0 ? "9%" : "25%",
                }}
              />
            ))}
        </div>
      ))}
    </div>
  );
};

Minutes.propTypes = {
  minutes: PropTypes.array.isRequired,
};

export default Minutes;
