// Test away
import React from "react";
import { render } from "@testing-library/react";

import Dashboard from "./Dashboard.js";

test("Dashboard renders without crashing", () => {
  const { getByText } = render(<Dashboard />);
  getByText(/unlock/i);
  getByText(/open/i);
});


test("should render controls and display", () => {
  const { getByText } = render(<Dashboard />);
  getByText(/unlock/i);
  getByText(/lock gate/i);
  getByText(/open/i);
  getByText(/close gate/i);
}); 