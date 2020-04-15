import React from "react";
import Seconds from "./seconds";
import PropTypes from "prop-types";

const BerlinClock = (props) => {
  const [hours, minutes, seconds] = props.time
    .split(":")
    .map((time) => parseInt(time));

  const getSeconds = (second) => {
    const secondColor = isEvenSecond(second) ? "Y" : "";
    return secondColor;
  };

  const isEvenSecond = (second) => {
    const isEven = second % 2 === 0 ? true : false;
    return isEven;
  };

  return (
    <div className="clock mv4">
      <Seconds seconds={getSeconds(seconds)} />
    </div>
  );
};

BerlinClock.propTypes = {
  time: PropTypes.string.isRequired,
};

export default BerlinClock;
