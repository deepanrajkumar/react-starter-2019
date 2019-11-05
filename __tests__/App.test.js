import React from "react";
import { shallow } from "enzyme";
import App from "../src/App";

test("should render the app", () => {
  const main = shallow.create(<App />).toJSON();
  expect(main).toMatchSnapshot();
});
