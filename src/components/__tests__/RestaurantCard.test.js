import { render, screen } from '@testing-library/react';
import RestaurantCard from '../RestaurantCard';
import MOCK_DATA from '../mocks/resCardMock.json';
import '@testing-library/jest-dom';

it('should render RestaurantCard component data', () => {
	// this card accept props swe have to pass it here in the test as well using mock data
	render(<RestaurantCard resData={MOCK_DATA} />);

	const name = screen.getByText('Madurai idly Shop');
	expect(name).toBeInTheDocument();
});
