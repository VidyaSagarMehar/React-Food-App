import { CDN_URL } from '../utils/constants';

const RestaurantCard = (props) => {
	const { resData } = props;

	const {
		cloudinaryImageId,
		name,
		avgRating,
		cuisines,
		costForTwo,
		deliveryTime,
	} = resData.info;

	return (
		<div data-testid="resCard" className="m-4 p-4 w-60 bg-red-100 rounded">
			<img
				className="rounded"
				alt="res-logo"
				src={CDN_URL + cloudinaryImageId}
			/>
			<h3 className="font-bold py-2">{name}</h3>
			<h4>{cuisines.join(', ')}</h4>
			<h4>{avgRating} ⭐</h4>
			<h4>{costForTwo}</h4>
			<h4>{resData?.info?.sla?.deliveryTime} minutes</h4>
		</div>
	);
};

// HIGHER ORDER COMPONENT
// input --> ReastaurantCard =>> RestaurantCardOpen

export const withOpenLabel = (RestaurantCard) => {
	// It will return a enhanced component
	return (props) => {
		return (
			<div>
				<label className="absolute bg-blue-700 text-white m-1 p-1 rounded">
					Open
				</label>
				<RestaurantCard {...props} />
			</div>
		);
	};
};

export default RestaurantCard;
