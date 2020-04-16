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
      Constants.ACTIVE_COLOR.repeat(hours / Constants.FIVE_BLOCK) +
      Constants.OFF_COLOR.repeat(
        Constants.FOUR_LAMPS - parseInt(hours / Constants.FIVE_BLOCK)
      );

    return upperRowColors;
  };

  const getSingleHoursRowColors = (hours) => {
    const lowerRowColors =
      Constants.ACTIVE_COLOR.repeat(hours % Constants.FIVE_BLOCK) +
      Constants.OFF_COLOR.repeat(
        Constants.FOUR_LAMPS - (hours % Constants.FIVE_BLOCK)
      );

    return lowerRowColors;
  };

  const getMinutes = (minutes) => {
    const fiveMinutesRow = getFiveMinutesRow(minutes);
    const minutesColors = [fiveMinutesRow];

    return minutesColors;
  };

  const getFiveMinutesRow = (minutes) => {
    const minutesDevideBy5 = Math.floor(minutes / Constants.FIVE_BLOCK);
    const fiveMinutesRow =
      getActiveFiveMinutes(minutesDevideBy5) +
      Constants.OFF_COLOR.repeat(
        Constants.ELEVEN_LAMP - parseInt(minutes / Constants.FIVE_BLOCK)
      );
    return fiveMinutesRow;
  };

  const getActiveFiveMinutes = (minutes) => {
    let activeLampColor = "";
    for (let lampIndex = 1; lampIndex <= minutes; lampIndex++) {
      if (lampIndex % Constants.THIRD_LAMP === 0) {
        activeLampColor += Constants.ACTIVE_COLOR;
      } else {
        activeLampColor += Constants.ACTIVE_YELLOW_COLOR;
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
