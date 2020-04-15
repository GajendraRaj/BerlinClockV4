import React from "react";
import { shallow } from "enzyme";
import checkPropTypes from "check-prop-types";
import Hour from "../../../../component/berlin-clock/hours/hour";

describe("Hour component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Hour index={1} hour={"R"} />);
  });

  it("should render a div", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("should render red lamp", () => {
    expect(wrapper.find(".bg-red")).toHaveLength(1);
  });

  it("should throw error message if there is no id prop", () => {
    const errorMsg =
      "Failed prop type: The prop `index` is marked as required in `<<anonymous>>`, but its value is `undefined`.";

    const result = checkPropTypes(
      Hour.propTypes,
      { index: undefined, hour: "R" },
      "prop",
      Hour.index
    );

    expect(result).toEqual(errorMsg);
  });

  it("should throw error message if there is no hour prop", () => {
    const errorMsg =
      "Failed prop type: The prop `hour` is marked as required in `<<anonymous>>`, but its value is `undefined`.";

    const result = checkPropTypes(
      Hour.propTypes,
      { index: 1, hour: undefined },
      "prop",
      Hour.hour
    );

    expect(result).toEqual(errorMsg);
  });
});
