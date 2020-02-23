import React from "react";
import { MemoryRouter } from "react-router-dom";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Home from "../routes/public/home";
import NotFound from "../routes/public/notfound";
import App from "../App";
import Login from "../routes/public/login";
import Signup from "../routes/public/signup";
import Routes from "../routes";

Enzyme.configure({ adapter: new Adapter() });

describe("Public routes", () => {
  it("Should render Home route", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );
    expect(wrapper.find(Home)).toHaveLength(1);
  });

  it("Should render Login route", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/login"]}>
        <App />
      </MemoryRouter>
    );
    expect(wrapper.find(Login)).toHaveLength(1);
  });
  
  it("Should render Signup route", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/signup"]}>
        <App />
      </MemoryRouter>
    );
    expect(wrapper.find(Signup)).toHaveLength(1);
  });

  it("Should render Notfound route", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/ffks"]}>
        <App />
      </MemoryRouter>
    );
    expect(wrapper.find(NotFound)).toHaveLength(1);
  });
});
