import React from "react";
import { shallow } from "enzyme";
import Minutes from "../../../component/berlin-clock/minutes";

describe("Minutes component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Minutes />);
  });

  it("should render a div", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });
});
