import { render, screen } from '@testing-library/react';
import App from './App';


// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });


// afterEach(cleanup);

// test('initial state', () => {
//   const { getByTestId } = render(<App />);
//   const stateElement = getByTestId('state');
//   expect(stateElement.textContent).toBe("initial");
// });




// test('renders save button', () => {
//   const { container } = render(<App />);
//   const saveButton = getByText(/Click here to see welcome message/i);

//   expect(saveButton).toBeInTheDocument(); // Asserts that the button is present in the DOM
//   expect(saveButton.type).toBe('button'); // Asserts that the button is of type "button"
// });

test('renders save button', () => {
  const { getByText } = render(<App />);
  const saveButton = getByText('Welcome!'); // finds the button with the text 'Save'
  
  expect(saveButton).toBeInTheDocument(); // Asserts that the button is present in the DOM
});