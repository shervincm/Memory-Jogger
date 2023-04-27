import { fireEvent, render, screen } from "@testing-library/react";
import {test, expect} from "@jest/globals";

import App from "./App";

//Three A's of testing
//Arrange
//Act
//Assert

//renders the webpage and checks for the word flashcard- test PASS
test("renders the webpage", () => {
  render(<App />);
  const linkElement = screen.getByText(/flashcard/i);
  expect(linkElement).toBeInTheDocument();
});

//this one doesn't work
test('adds a fact when the form is submitted', () => {
  render(<App />);
  const factTitleInput = screen.getByText(/Add Title/);
  const factInput = screen.getByText(/Add Fact/);
  const addButton = screen.getByRole('button', { name: /Add Flashcard/i });
  expect(factTitleInput).toBeInTheDocument();
  expect(factInput).toBeInTheDocument();
  expect(addButton).toBeInTheDocument();
});


//test to check if the clear facts button is on the page -PASS
test('clear facts button is on the page', () => {
  render(<App />);
  const clearFactsButton = screen.getByRole('button', { name: /Clear Facts/i });
  expect(clearFactsButton).toBeInTheDocument();
});

//test to check if the Clear Facts button clears the facts
// test('clear facts button clears the facts', () => {
//   render(<App />);
//   const clearFactsButton = screen.getByRole('button', { name: /Clear Facts/i });

//   fireEvent.click(clearFactsButton);


// }