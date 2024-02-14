import { render, screen } from '@testing-library/react';
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

it('Should Render the cody component with search button', async () => {
	await act(async () =>
		render(
			//we have to wrap it inside the Browser router otherwise it will give error <Link> not defined
			<BrowserRouter>
				<Body />{' '}
			</BrowserRouter>,
		),
	);

	const searchButton = screen.getByRole('button', { name: 'Search' });

	expect(searchButton).toBeInTheDocument();
});
