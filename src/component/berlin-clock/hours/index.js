import React from "react";
import PropTypes from "prop-types";
import Hour from "./hour";
import Constants from "../../../constant";

const Hours = (props) => {
  return (
    <div>
      {props.hours.map((hours, index) => (
        <div key={index} className={Constants.HOURS_STYLE_CLASS}>
          {hours &&
            hours
              .split("")
              .map((hour, index) => <Hour index={index} hour={hour} />)}
        </div>
      ))}
    </div>
  );
};

Hours.propTypes = {
  hours: PropTypes.array.isRequired,
};

export default Hours;
