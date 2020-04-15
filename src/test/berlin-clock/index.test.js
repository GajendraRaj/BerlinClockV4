import React from "react";
import { shallow } from "enzyme";
import BerlinClock from "../../component/berlin-clock";
import Seconds from "../../component/berlin-clock/seconds";
import checkPropTypes from "check-prop-types";

describe("Berlin Clock component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<BerlinClock time={"00:00:00"} />);
  });

  it("should render a div", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("should render the seconds component", () => {
    expect(wrapper.find("Seconds").length).toEqual(1);
  });

  it("should throw error message if there is no time prop", () => {
    const errorMsg =
      "Failed prop type: The prop `time` is marked as required in `<<anonymous>>`, but its value is `undefined`.";

    const result = checkPropTypes(
      BerlinClock.propTypes,
      { time: undefined },
      "prop",
      BerlinClock.time
    );

    expect(result).toEqual(errorMsg);
  });

  it("should throw error message if time prop type is not a string", () => {
    const errorMsg =
      "Failed prop type: Invalid prop `time` of type `number` supplied to `<<anonymous>>`, expected `string`.";

    const result = checkPropTypes(
      BerlinClock.propTypes,
      { time: 12 },
      "prop",
      BerlinClock.time
    );

    expect(result).toEqual(errorMsg);
  });
});

describe("Seconds Lamp functionality", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<BerlinClock time={"00:00:00"} />);
  });

  it("should pass Y for even second value", () => {
    const secondsWrapper = wrapper.find(Seconds);
    expect(secondsWrapper.props().seconds).toEqual("Y");
  });

  it("should pass O for odd second value", () => {
    const wrapper = shallow(<BerlinClock time={"23:59:59"} />);
    const secondsWrapper = wrapper.find(Seconds);
    expect(secondsWrapper.props().seconds).toEqual("O");
  });
});
