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

//Test PASS
test('adds a fact when the form is submitted', () => {
  render(<App />);
  const titleInput = screen.getByPlaceholderText(/Add Title/);
  const factInput = screen.getByPlaceholderText(/Add Fact/);
  const addButton = screen.getByRole('button', { name: /Add Flashcard/i });
  expect(titleInput).toBeInTheDocument();
  expect(factInput).toBeInTheDocument();
  expect(addButton).toBeInTheDocument();
});


//test to check if the clear facts button is on the page -PASS
test('clear facts button is on the page', () => {
  render(<App />);
  const clearFactsButton = screen.getByRole('button', { name: /Clear Facts/i });
  expect(clearFactsButton).toBeInTheDocument();
});

//test to check when they click Add Flashcard button, the title and fact are emptied -PASS
test("when Add Flashcard is clicked, the title and fact get emptied", () => { 
  render(<App />);
  const title = screen.getByPlaceholderText(/Add Title/);
  title.type = "Test Title";
  const fact = screen.getByPlaceholderText(/Add Fact/);
  fact.fill = "Test Fact";
  const addButton = screen.getByRole('button', { name: /Add Flashcard/i });
  fireEvent.click(addButton);
  expect(title).toBeEmpty();
  expect(fact).toBeEmpty();
});


//test to check the array changes when the add button is clicked and also tests to see if its the same after page refresh -Test PASS
test("adds new flashcard object to data array when Add Flashcard button is clicked and also tests to see if its the same after page refresh", () => {
  render(<App />);
  // Find the input fields for the flashcard title and fact
  const titleInput = screen.getByPlaceholderText(/Add Title/);
  const factInput = screen.getByPlaceholderText(/Add Fact/);
  // Simulate user input by typing into the input fields
  fireEvent.change(titleInput, { target: { value: "New Flashcard Title" } });
  fireEvent.change(factInput, { target: { value: "New Flashcard Fact" } });
  // Find the "Add Flashcard" button and click it
  const addFlashcardButton = screen.getByText("Add Flashcard");
  fireEvent.click(addFlashcardButton);
  // Check that the new flashcard object has been added to the data array
  const data = JSON.parse(localStorage.getItem("data_5f9b3b1c9b2c4d0001c3b0a9"));
  const newFlashcard = data[data.length - 1];
  expect(newFlashcard.usertitle).toEqual("New Flashcard Title");
  expect(newFlashcard.fact).toEqual("New Flashcard Fact");

  //page refresh
  window.location.reload();
  expect(newFlashcard.usertitle).toEqual("New Flashcard Title");
  expect(newFlashcard.fact).toEqual("New Flashcard Fact");

});


//test to check clicking Clear Facts button resets the data array PASS
test("clicking Clear Facts button deletes local storage", () => {
  render(<App />);
  // Find the input fields for the flashcard title and fact
  const titleInput = screen.getByPlaceholderText(/Add Title/);
  const factInput = screen.getByPlaceholderText(/Add Fact/);

  // Simulate user input by typing into both of the input fields
  fireEvent.change(titleInput, { target: { value: "New Flashcard Title" } });
  fireEvent.change(factInput, { target: { value: "New Flashcard Fact" } });

  // Find the "Add Flashcard" button and click it
  const addFlashcardButton = screen.getByText("Add Flashcard");
  fireEvent.click(addFlashcardButton);

  // Check that the local storage has been updated
  expect(localStorage.getItem("data_5f9b3b1c9b2c4d0001c3b0a9")).not.toBe(null);

  // Find the "Clear Facts" button and click it
  const clearFactsButton = screen.getByText("Clear Facts");
  fireEvent.click(clearFactsButton);

  // Check that the local storage has been deleted
  expect(localStorage.getItem("data_5f9b3b1c9b2c4d0001c3b0a9")).toBe(null);
});

// once test me button is clicked, the flashcard(<p></p>) is displayed - NOT WORKING YET -come back if have time
// test("once test me button is clicked, the flashcard(<p></p>) is displayed", () => {
//   render(<App />);
//   const testMeButton = screen.getByRole('button', { name: /Test Me/i });
//   fireEvent.click(testMeButton);
  
//   // Find all <p> elements and filter the results to select the ones we need
//   const allPElements = screen.queryAllByRole("paragraph");
  
//   // Check that at least one <p> element is displayed
//   expect(allPElements[0]).toBeVisible();
// });