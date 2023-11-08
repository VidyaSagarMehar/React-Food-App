import { render, screen } from '@testing-library/react';
import Contact from '../Contact';
import '@testing-library/jest-dom';

test('Should load contact us component', () => {
	render(<Contact />); // It will test whether this componet is being load on the render of the DOM or not

	const heading = screen.getByRole('heading');

	// Assertion
	expect(heading).toBeInTheDocument();
});
