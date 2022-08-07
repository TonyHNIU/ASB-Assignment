import App from "./App";
import React from "react";
import { render, fireEvent, act, screen } from "@testing-library/react";

test("handle onClick", () => {
  const onClick = jest.fn();
  render(<App />);

  const divElement = screen.getByRole("contentinfo");

  fireEvent.click(divElement);

  expect(onClick).toHaveReturned();
});
