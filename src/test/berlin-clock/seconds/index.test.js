import React from "react";
import { shallow } from "enzyme";
import Seconds from "../../../component/berlin-clock/seconds";

describe("Seconds component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Seconds />);
  });

  it("should render a div", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });
});
