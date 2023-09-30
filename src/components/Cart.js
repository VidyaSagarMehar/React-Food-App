import { useSelector } from 'react-redux';
import ItemList from './ItemList';
import { useDispatch } from 'react-redux';
import { clearCart } from '../utils/cartSlice';

const cart = () => {
	// subscribing to the store
	const cartItems = useSelector((store) => store.cart.items);

	const dispatch = useDispatch();
	const handleClearCart = () => {
		dispatch(clearCart());
	};

	return (
		<div className="text-center m-4 p-4">
			<h1 className="text-2xl font-bold">This is cart page</h1>
			<button
				onClick={handleClearCart}
				className="p-2 m-2 bg-black rounded text-white font-semibold"
			>
				Clear Cart
			</button>
			<div className="w-6/12 m-auto">
				{cartItems.length == 0 && (
					<h1>Your Cart is empty, Add Items to the cart</h1>
				)}
				<ItemList items={cartItems} />
			</div>
		</div>
	);
};

export default cart;
