import CostItem from "./components/CostItem";

function App() {
	const costs = [
		{
			date: new Date(2021, 6, 12),
			description: "Refrigerator",
			amount: 999.99,
		},
		{
			date: new Date(2021, 7, 22),
			description: "MacBook",
			amount: 1599.99,
		},
		{
			date: new Date(2021, 5, 12),
			description: "Jeans",
			amount: 49.99,
		},
	];

	return (
		<div>
			<h1>Start learning React!</h1>
			<CostItem
				date={costs[0].date}
				description={costs[0].description}
				amount={costs[0].amount}
			/>
			<CostItem
      date={costs[1].date}
      description={costs[1].description}
      amount={costs[1].amount} />
			<CostItem
      date={costs[2].date}
      description={costs[2].description}
      amount={costs[2].amount} />
		</div>
	);
}

export default App;
