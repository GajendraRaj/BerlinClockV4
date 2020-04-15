import React from "react";
import PropTypes from "prop-types";

const Minutes = (props) => {
  const minutes = props.minutes[0];
  const minuteColor = (minute) => {
    if (minute === "Y") {
      return "bg-yellow";
    } else if (minute === "R") {
      return "bg-red";
    } else {
      return "bg-silver";
    }
  };

  return (
    <div className="hours">
      {minutes &&
        minutes.split("").map((minute, index) => (
          <div
            key={index}
            className={`hours-rows ${minuteColor(minute)}`}
            style={{
              width: "9%",
            }}
          />
        ))}
    </div>
  );
};

Minutes.propTypes = {
  minutes: PropTypes.array.isRequired,
};

export default Minutes;
