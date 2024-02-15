import { render, screen } from '@testing-library/react';
import Contact from '../Contact';
import '@testing-library/jest-dom';

describe('Contact Us page Test Case', () => {
	beforeAll(() => {
		console.log('Before all'); // It will run before all the test cases
	});

	beforeEach(() => {
		console.log('Before each'); //it will run before each test cases
	});

	afterAll(() => {
		console.log('After all'); //it woll run after all the test cases
	});
	afterEach(() => {
		console.log('after each'); // it will after each of the test cases
	});

	//It is just a discription block and we can have multiple describe and describe inside the describe as well
	test('Should load contact us component', () => {
		render(<Contact />); // It will test whether this componet is being load on the render of the DOM or not

		const heading = screen.getByRole('heading');

		// Assertion
		expect(heading).toBeInTheDocument();
	});

	test('Should load button inside my contact component', () => {
		render(<Contact />);

		// const button = screen.getByRole('button'); //or
		const button = screen.getByText('Submit');

		// Assertion
		expect(button).toBeInTheDocument();
	});

	it('Should load 2 input boxes on the Contact component', () => {
		//we can use 'it' instead od 'test', both are the same thing, there is no difference
		render(<Contact />);

		const inputBoxes = screen.getAllByRole('textbox');

		expect(inputBoxes.length).toBe(2);
	});
});
