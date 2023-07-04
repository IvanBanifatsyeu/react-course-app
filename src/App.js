import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";


const App = () => {
	const costs = [
		{
			id: 'c1',
			date: new Date(2021, 6, 12),
			description: "Refrigerator",
			amount: 999.99,
		},
		{	id: 'c2',
			date: new Date(2021, 7, 22),
			description: "MacBook",
			amount: 1599.99,
		},
		{	id: 'c3',
			date: new Date(2021, 5, 12),
			description: "Jeans",
			amount: 49.99,
		},
	];

	const addCostHandler = (cost) => {
		console.log(cost)
		console.log("App Component")
	}

	return (
		<div>
			<NewCost onAddCost={addCostHandler}/>
			<Costs costs={costs} />
		</div>
	);
}

export default App;
