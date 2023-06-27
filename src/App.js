import Costs from "./components/Costs";


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
			<h1 className="heading">Start learning React!</h1>
			<Costs costs={costs} />
		</div>
	);
}

export default App;
