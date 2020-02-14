import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { render } from "@testing-library/react";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test(`Nav title renders correctly`, () => {
  //Arrange
  const { getByText } = render(<App />);

  //Act
  const title = getByText(/men's soccer players - world ranking/i);

  //Assert
  expect(title).toBeInTheDocument();
});
