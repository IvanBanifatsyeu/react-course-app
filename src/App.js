import React, { useState } from "react";
import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";

const INITIAL_COSTS = [
	{
		id: "c1",
		date: new Date(2022, 6, 12),
		description: "Refrigerator",
		amount: 999.99,
	},
	{
		id: "c2",
		date: new Date(2021, 7, 22),
		description: "MacBook",
		amount: 1599.99,
	},
	{
		id: "c3",
		date: new Date(2020, 5, 12),
		description: "Jeans",
		amount: 49.99,
	},
	{
		id: "c4",
		date: new Date(2023, 5, 12),
		description: "Parrot",
		amount: 300,
	},
	{
		id: "c5",
		date: new Date(2023, 2, 12),
		description: "Bike",
		amount: 400,
	},
	{
		id: "c6",
		date: new Date(2023, 3, 12),
		description: "Cap",
		amount: 10,
	},
	{
		id: "c7",
		date: new Date(2023, 3, 8),
		description: "Phone",
		amount: 220,
	},
];

const App = () => {
	const [costs, setCosts] = useState(INITIAL_COSTS);

	const addCostHandler = (cost) => {
		setCosts((prevCosts) => [cost, ...costs]);
	};

	return (
		<div>
			<NewCost onAddCost={addCostHandler} />
			<Costs costs={costs} />
		</div>
	);
};

export default App;
