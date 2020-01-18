// Test away!
import React from "react";
import { render, fireEvent } from "@testing-library/react";

import Controls from "./Controls.js";

test("Control renders", () => {
    render(<Controls />);
});

test("renders toggle buttons for lock/close state", () =>{
    const { getByText } = render(<Controls />);

    getByText(/close gate/i);
    getByText(/lock gate/i);
});

test("should render open if closed", () =>{
    const { getByText } = render(<Controls closed={true} />);

    getByText(/open gate/i);
});

test("render unlocked if locked", () =>{
    const { getByText } = render(<Controls locked={true} />);

    getByText(/unlock gate/i);
});

test("close toggle button is disabled if gate is locked", () =>{
    const toggleClosed = jest.fn();
    const { getByText } = render(
        <Controls toggleClosed={toggleClosed} closed={true} locked={true} />
    );

    const openToggle = getByText(/open gate/i);
    fireEvent.click(openToggle);
    expect(toggleClosed).not.toHaveBeenCalled();
});

test("Locked toggle button is disabled if gate is open", () =>{
    const toggleLocked = jest.fn();

    const { getByText } =render(
        <Controls toggleLocked={toggleLocked} closed={false} locked={false} />
    );

    const lockToggle = getByText(/lock gate/i);

    fireEvent.click(lockToggle);

    expect(toggleLocked).not.toHaveBeenCalled();
})