import React from "react";
import renderer from "react-test-renderer";
import App from "../src/App";

test("should render the app", () => {
  const main = renderer.create(<App />).toJSON();
  expect(main).toMatchSnapshot();
});
