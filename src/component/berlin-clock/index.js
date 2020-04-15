import React from "react";
import Seconds from "./seconds";
import Hours from "./hours";
import PropTypes from "prop-types";
import Constants from "../../constant";

const BerlinClock = (props) => {
  const [hours, minutes, seconds] = props.time
    .split(":")
    .map((time) => parseInt(time));

  const getSeconds = (second) => {
    const secondColor = isEvenSecond(second)
      ? Constants.EVEN_SECOND
      : Constants.ODD_SECOND;
    return secondColor;
  };

  const isEvenSecond = (second) => {
    const isEven = second % 2 === 0 ? true : false;
    return isEven;
  };

  return (
    <div className="clock mv4">
      <Seconds seconds={getSeconds(seconds)} />
      <Hours />
    </div>
  );
};

BerlinClock.propTypes = {
  time: PropTypes.string.isRequired,
};

export default BerlinClock;
