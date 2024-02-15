import { fireEvent, render, screen } from '@testing-library/react';
import Body from '../Body';
import MOCK_DATA from '../mocks/mockResListFetch.json';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

// dummy/mock fetch fuction
global.fetch = jest.fn(() => {
	return Promise.resolve({
		json: () => {
			return Promise.resolve(MOCK_DATA);
		},
	});
});

it('Should Render the cody component with search and should search resList for burger input', async () => {
	await act(async () =>
		render(
			//we have to wrap it inside the Browser router otherwise it will give error <Link> not defined
			<BrowserRouter>
				<Body />{' '}
			</BrowserRouter>,
		),
	);

	const searchButton = screen.getByRole('button', { name: 'Search' });

	const searchInput = screen.getByTestId('searchInput');

	// targeting on the search button with "burger" text
	fireEvent.change(searchInput, { target: { value: 'Burger' } });
	//clicking on the search button
	fireEvent.click(searchButton);

	//screen should load 2 res card

	const cards = screen.getAllByTestId('resCard');

	expect(searchButton).toBeInTheDocument();

	expect(cards.length).toBe(1);
});
