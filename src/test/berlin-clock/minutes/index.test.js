import React from "react";
import { shallow } from "enzyme";
import Minutes from "../../../component/berlin-clock/minutes";
import checkPropTypes from "check-prop-types";

describe("Minutes component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Minutes minutes={["OOOOOOOOOOO", "OOOO"]} />);
  });

  it("should render a div", () => {
    expect(wrapper.find("div").length).toEqual(3);
  });

  it("Should render 15 Minute components for minutes row", () => {
    expect(wrapper.find("Minute")).toHaveLength(15);
  });

  it("Should throw error message if there is no minutes prop", () => {
    const errorMsg =
      "Failed prop type: The prop `minutes` is marked as required in `<<anonymous>>`, but its value is `undefined`.";

    const result = checkPropTypes(
      Minutes.propTypes,
      { minutes: undefined },
      "prop",
      Minutes.minutes
    );

    expect(result).toEqual(errorMsg);
  });
});
