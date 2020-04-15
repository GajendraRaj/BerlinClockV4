import React from "react";
import PropTypes from "prop-types";

const Hours = (props) => {
  const hours = props.hours[0];
  const hourColor = (hour) => (hour === "R" ? "bg-red" : "bg-silver");

  return (
    <div className="hours">
      {hours.split("").map((hour, index) => (
        <div
          key={index}
          className={`hours-rows ${hourColor(props.hour)}`}
          style={{ width: "25%" }}
        />
      ))}
    </div>
  );
};

Hours.propTypes = {
  hours: PropTypes.array.isRequired,
};

export default Hours;
