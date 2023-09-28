import { LOGO_URL } from '../utils/constants';
import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';

const Header = () => {
	const [btnNameReact, setBtnNameReact] = useState('Login');
	// console.log('Header render');

	const onlineStatus = useOnlineStatus();

	// Data from the context
	const { loggedInUser } = useContext(UserContext);
	console.log(loggedInUser);

	return (
		<div className="flex justify-between bg-pink-200">
			<div className="logo-container">
				<img className="w-24" src={LOGO_URL} />
			</div>
			<div className="nav-items">
				<ul className="flex p-4 m-4">
					<li className="px-4">Online Status : {onlineStatus ? '🟢' : '🔴'}</li>
					<li className="px-4">
						<Link to="/">Home</Link>
					</li>
					<li className="px-4">
						<Link to="/about"> About Us</Link>
					</li>
					<li className="px-4">
						<Link to="contact">Contact Us</Link>
					</li>
					<li className="px-4">
						<Link to="grocery">Grocery</Link>
					</li>
					<li className="px-4 font-bold">
						<Link to="cart">Cart (0 items)</Link>
					</li>
					<button
						className="login"
						onClick={() => {
							btnNameReact === 'Login'
								? setBtnNameReact('Logout')
								: setBtnNameReact('Login');
						}}
					>
						{btnNameReact}
					</button>
					<li className="px-4 font-bold">{loggedInUser}</li>
				</ul>
			</div>
		</div>
	);
};

export default Header;
