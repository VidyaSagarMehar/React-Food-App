import { fireEvent, render, screen } from '@testing-library/react';
import Header from '../Header';
import { Provider } from 'react-redux';
import appStore from '../../utils/appStore';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

it('Should load Header component with a login button', () => {
	//since we are using redux in our header so we have to wrap it inside the provider, just like we have wraped our whole app inside the provider
	// we have to wrap it again inside the Browser router, Or Link will not work and gonna get error in Link element
	render(
		<BrowserRouter>
			<Provider store={appStore}>
				<Header />
			</Provider>
		</BrowserRouter>,
	);

	// const loginButton = screen.getByRole('button');

	//Anothoer way to find login button
	// const loginButton = screen.getByText('Login');

	// another way to find specifially the Login button
	const loginButton = screen.getByRole('button', { name: 'Login' });

	expect(loginButton).toBeInTheDocument();
});

it('Should load Header component with a Cart item 0', () => {
	render(
		<BrowserRouter>
			<Provider store={appStore}>
				<Header />
			</Provider>
		</BrowserRouter>,
	);

	// const cartItems = screen.getByText('Cart (0 items)');

	// By using REgex, so that we do not have to match the exact string
	const cartItems = screen.getByText(/Cart/);

	expect(cartItems).toBeInTheDocument();
});

it('Should change login button to logout when clicked', () => {
	render(
		<BrowserRouter>
			<Provider store={appStore}>
				<Header />
			</Provider>
		</BrowserRouter>,
	);
	const loginButton = screen.getByRole('button', { name: 'Login' });

	fireEvent.click(loginButton);

	const logoutButton = screen.getByRole('button', { name: 'Logout' });

	expect(logoutButton).toBeInTheDocument();
});
