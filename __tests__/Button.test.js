// __tests__/Button.test.js
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button from "../components/Button";

test("Button click handler is called", () => {
  const onClickMock = jest.fn();
  const { getByText } = render(
    <Button onClick={onClickMock} label="Click me" />
  );

  const button = getByText("Click me");
  fireEvent.click(button);

  expect(onClickMock).toHaveBeenCalled();
});
