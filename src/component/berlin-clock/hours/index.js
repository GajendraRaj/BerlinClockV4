import React from "react";
import PropTypes from "prop-types";
import Constants from "../../../constant";

const Hours = (props) => {
  const hours = props.hours;
  const hourColor = (hour) =>
    hour === Constants.ACTIVE_HOURS_COLOR
      ? Constants.RED_STYLE_CLASS
      : Constants.OFF_STYLE_CLASS;

  return (
    <div>
      {hours.map((hours, index) => (
        <div key={index} className={Constants.HOURS_STYLE_CLASS}>
          {hours &&
            hours
              .split("")
              .map((hour, index) => (
                <div
                  key={index}
                  className={`${Constants.HOURS_ROWS_STYLE_CLASS} ${hourColor(
                    hour
                  )}`}
                  style={{ width: "25%" }}
                />
              ))}
        </div>
      ))}
    </div>
  );
};

Hours.propTypes = {
  hours: PropTypes.array.isRequired,
};

export default Hours;
