import React from "react";
import PropTypes from "prop-types";
import Minute from "./minute";
import Constants from "../../../constant";

const Minutes = (props) => {
  const minutes = props.minutes;

  return (
    <div>
      {minutes.map((minutes, rowId) => (
        <div key={rowId} className={Constants.MINUTES_STYLE_CLASS}>
          {minutes &&
            minutes
              .split("")
              .map((minute, index) => (
                <Minute index={index} minute={minute} rowId={rowId} />
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
