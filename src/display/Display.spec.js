// Test away!
import React from "react";
import { render } from "@testing-library/react";

import Display from "./Display.js";

test("Display renders without crashing", () => {
  render(<Display />);
});

test("displays unlocked when unlocked", () => {
  const { getByText } = render(<Display locked={false} />);
  getByText(/^unlocked$/i);
});
test("displays locked when locked", () => {
  const { getByText } = render(<Display locked={true} />);
  getByText(/^locked$/i);
});
test("displays open when open", () => {
  const { getByText } = render(<Display closed={false} />);
  getByText(/^open$/i);
});
test("displays closed when closed", () => {
  const { getByText } = render(<Display closed={true} />);
  getByText(/^closed$/i);
}); 