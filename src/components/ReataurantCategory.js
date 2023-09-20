import { useState } from 'react';
import ItemList from './ItemList';

const ReataurantCategory = ({ data, showItems, setShowIndex }) => {
	// console.log(data);
	// const [showItems, setShowItems] = useState(false);

	const handleClick = () => {
		// toggle feature
		// setShowItems(!showItems);
		setShowIndex();
	};

	return (
		<div>
			{/* Accordian Header */}
			<div className="w-6/12 bg-gray-50 shadow-md p-4 m-auto my-3">
				<div
					className=" flex justify-between cursor-pointer"
					onClick={handleClick}
				>
					<span className="font-semibold text-lg">
						{data.title} ({data.itemCards.length})
					</span>
					<span>🔽</span>
				</div>
				{/* Accordian body */}
				<div>{showItems && <ItemList items={data.itemCards} />}</div>
			</div>
		</div>
	);
};

export default ReataurantCategory;
