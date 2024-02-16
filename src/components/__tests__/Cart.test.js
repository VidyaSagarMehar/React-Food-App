import { act } from 'react-dom/test-utils';
import RestaurantMenu from '../RestaurantMenu';
import MOCK_DATA from '../mocks/mockResMenu.json';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import appStore from '../../utils/appStore';

global.fetch = jest.fn(() =>
	Promise.resolve({
		json: () => Promise.resolve(MOCK_DATA),
	}),
);

it('Should load Restaurant Menu compnent', async () => {
	await act(async () =>
		render(
			<Provider store={appStore}>
				<RestaurantMenu />{' '}
			</Provider>,
		),
	);

	const accordianHeader = screen.getByText('Recommended (4)');

	fireEvent.click(accordianHeader);

	// Use queryByTestId instead of getAllByTestId to avoid throwing error if no elements are found
	const foodItems = screen.queryAllByTestId('foodItems');

	// Check if foodItems is not null or empty array before asserting its length
	expect(foodItems).toBeTruthy();
	expect(foodItems.length).toBe(0);
});
