import React from "react";
import { shallow } from "enzyme";
import BerlinClock from "../../component/berlin-clock";

describe("Berlin Clock component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<BerlinClock />);
  });

  it("should render a div", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });
});
