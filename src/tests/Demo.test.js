import { render, cleanup, screen } from "@testing-library/react";
import Navbar from "../Components/Navbar";
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom'
import Demo from "../Components/Demo";
import React from "react";

afterEach(() => {
  cleanup(); // Resets the DOM after each test suite
})

// test("demo rendering", () => {
// // render the component on virtual dom
// render(<Demo/>);
// });

// test("check content in demo", () => {
//   // check hello world is there
// render(<Demo/>);
// const screentext = screen.queryByText(/Hello World/i);
// expect(screentext).toBeInTheDocument();
// });

test("check classname in demo", () => {
  // check classname is there
render(<Demo/>);
expect(container).toHaveClass('container')
});
