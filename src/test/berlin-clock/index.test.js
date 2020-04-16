import React from "react";
import { shallow } from "enzyme";
import BerlinClock from "../../component/berlin-clock";
import Seconds from "../../component/berlin-clock/seconds";
import Minutes from "../../component/berlin-clock/minutes";
import Hours from "../../component/berlin-clock/hours";
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

  it("should render the hours component", () => {
    expect(wrapper.find("Hours").length).toEqual(1);
  });

  it("should render the minutes component", () => {
    expect(wrapper.find("Minutes").length).toEqual(1);
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

describe("Five Hours Row functionality", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<BerlinClock time={"00:00:00"} />);
  });

  it("should pass OOOO for '00' hour", () => {
    const hoursWrapper = wrapper.find(Hours);
    expect(hoursWrapper.props().hours[0]).toEqual("OOOO");
  });

  it("should return RRRR for '23' hour", () => {
    const wrapper = shallow(<BerlinClock time={"23:59:59"} />);
    const hoursWrapper = wrapper.find(Hours);
    expect(hoursWrapper.props().hours[0]).toEqual("RRRR");
  });

  it("should return ROOO for '08' hour", () => {
    const wrapper = shallow(<BerlinClock time={"08:23:00"} />);
    const hoursWrapper = wrapper.find(Hours);
    expect(hoursWrapper.props().hours[0]).toEqual("ROOO");
  });

  it("should return RRRO for '16' hour", () => {
    const wrapper = shallow(<BerlinClock time={"16:35:00"} />);
    const hoursWrapper = wrapper.find(Hours);
    expect(hoursWrapper.props().hours[0]).toEqual("RRRO");
  });
});

describe("Single Hours Row functionality", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<BerlinClock time={"00:00:00"} />);
  });

  it("should return OOOO for '00' hour", () => {
    const hoursWrapper = wrapper.find(Hours);
    expect(hoursWrapper.props().hours[1]).toEqual("OOOO");
  });

  it("should return RRRO for '23' hour", () => {
    const wrapper = shallow(<BerlinClock time={"23:59:59"} />);
    const hoursWrapper = wrapper.find(Hours);
    expect(hoursWrapper.props().hours[1]).toEqual("RRRO");
  });

  it("should return RROO for '02' hour", () => {
    const wrapper = shallow(<BerlinClock time={"02:04:00"} />);
    const hoursWrapper = wrapper.find(Hours);
    expect(hoursWrapper.props().hours[1]).toEqual("RROO");
  });

  it("should return RRRR for '14' hour", () => {
    const wrapper = shallow(<BerlinClock time={"14:35:00"} />);
    const hoursWrapper = wrapper.find(Hours);
    expect(hoursWrapper.props().hours[1]).toEqual("RRRR");
  });
});

describe("Five Minutes Row functionality", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<BerlinClock time={"00:00:00"} />);
  });

  it("should return OOOOOOOOOOO for '00' minutes", () => {
    const minutesWrapper = wrapper.find(Minutes);
    expect(minutesWrapper.props().minutes[0]).toEqual("OOOOOOOOOOO");
  });

  it("should return YYRYYRYYRYY for '59' minutes", () => {
    const wrapper = shallow(<BerlinClock time={"23:59:59"} />);
    const minutesWrapper = wrapper.find(Minutes);
    expect(minutesWrapper.props().minutes[0]).toEqual("YYRYYRYYRYY");
  });

  it("should return OOOOOOOOOOO for '04' minutes", () => {
    const wrapper = shallow(<BerlinClock time={"12:04:00"} />);
    const minutesWrapper = wrapper.find(Minutes);
    expect(minutesWrapper.props().minutes[0]).toEqual("OOOOOOOOOOO");
  });

  it("should return YYRYYRYOOOO for '35' minutes", () => {
    const wrapper = shallow(<BerlinClock time={"12:35:00"} />);
    const minutesWrapper = wrapper.find(Minutes);
    expect(minutesWrapper.props().minutes[0]).toEqual("YYRYYRYOOOO");
  });
});

describe("Single Minutes Row functionality", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<BerlinClock time={"00:00:00"} />);
  });

  it("should return OOOO for '00' minute", () => {
    const minutesWrapper = wrapper.find(Minutes);
    expect(minutesWrapper.props().minutes[1]).toEqual("OOOO");
  });

  it("should return YYYY for '59' minute", () => {
    const wrapper = shallow(<BerlinClock time={"23:59:59"} />);
    const minutesWrapper = wrapper.find(Minutes);
    expect(minutesWrapper.props().minutes[1]).toEqual("YYYY");
  });

  it("should return YYOO for '32' minute", () => {
    const wrapper = shallow(<BerlinClock time={"12:32:00"} />);
    const minutesWrapper = wrapper.find(Minutes);
    expect(minutesWrapper.props().minutes[1]).toEqual("YYOO");
  });
});
