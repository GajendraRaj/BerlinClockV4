import React from "react";
import Seconds from "./seconds";
import Hours from "./hours";
import Minutes from "./minutes";
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
    const fiveRowColors = getFiveHoursRowColors(hours);
    const singleRowColors = getSingleHoursRowColors(hours);
    const hoursColors = [fiveRowColors, singleRowColors];

    return hoursColors;
  };

  const getFiveHoursRowColors = (hours) => {
    const upperRowColors =
      Constants.ACTIVE_HOURS_COLOR.repeat(
        hours / Constants.FIVE_HOURS_ROW_BLOCK_VALUE
      ) +
      Constants.OFF_COLOR.repeat(
        Constants.RED_LAMPS_COUNT -
          parseInt(hours / Constants.FIVE_HOURS_ROW_BLOCK_VALUE)
      );

    return upperRowColors;
  };

  const getSingleHoursRowColors = (hours) => {
    const lowerRowColors =
      Constants.ACTIVE_HOURS_COLOR.repeat(
        hours % Constants.FIVE_HOURS_ROW_BLOCK_VALUE
      ) +
      Constants.OFF_COLOR.repeat(
        Constants.RED_LAMPS_COUNT -
          (hours % Constants.FIVE_HOURS_ROW_BLOCK_VALUE)
      );

    return lowerRowColors;
  };

  const getMinutes = (minutes) => {
    const fiveMinutesRow = getFiveMinutesRow(minutes);
    const minutesColors = [fiveMinutesRow];

    return minutesColors;
  };

  const getFiveMinutesRow = (minutes) => {
    const minutesDevideBy5 = Math.floor(minutes / 5);
    const fiveMinutesRow =
      getActiveFiveMinutes(minutesDevideBy5) +
      "O".repeat(11 - parseInt(minutes / 5));
    return fiveMinutesRow;
  };

  const getActiveFiveMinutes = (minutes) => {
    let activeLampColor = "";
    for (let lampIndex = 1; lampIndex <= minutes; lampIndex++) {
      if (lampIndex % 3 === 0) {
        activeLampColor += "R";
      } else {
        activeLampColor += "Y";
      }
    }
    return activeLampColor;
  };

  return (
    <div className="clock mv4">
      <Seconds seconds={getSeconds(seconds)} />
      <Hours hours={getHours(hours)} />
      <Minutes minutes={getMinutes(minutes)} />
    </div>
  );
};

BerlinClock.propTypes = {
  time: PropTypes.string.isRequired,
};

export default BerlinClock;
