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

  const getHours = (hours) => {
    const upperRowColors = getUpperRowHoursColors(hours);
    const hoursColors = [upperRowColors];

    return hoursColors;
  };

  const getUpperRowHoursColors = (hours) => {
    const upperRowColors =
      "R".repeat(hours / 5) + "O".repeat(4 - parseInt(hours / 5));

    return upperRowColors;
  };

  return (
    <div className="clock mv4">
      <Seconds seconds={getSeconds(seconds)} />
      <Hours hours={getHours(hours)} />
    </div>
  );
};

BerlinClock.propTypes = {
  time: PropTypes.string.isRequired,
};

export default BerlinClock;
