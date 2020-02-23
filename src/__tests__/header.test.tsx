import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Header from "../components/header";

Enzyme.configure({ adapter: new Adapter() });

describe("Header component", () => {
  it("Should render Header", () => {
    shallow(<Header />);
  });

  it("should have three lists", () => {
    const wrapper = mount(<Header />);
    expect(wrapper.find("header nav #main-nav li")).toHaveLength(3);
  });

  it("should have a logo container", () => {
    const wrapper = mount(<Header />);
    expect(wrapper.find("header nav #logo")).toHaveLength(1);
  });

  it("should have a user icon", () => {
    const wrapper = mount(<Header />);
    expect(wrapper.find("header nav #account i")).toHaveLength(1);
  });
});
