import CostForm from "./CostForm";
import "./NewCost.css";

const NewCost = (props) => {
	const saveCostDataHAndler = (inputCostData) => {
		const cosData = {
			...inputCostData,
			id: Math.random().toString(),
		};
		props.onAddCost(cosData);
	};

	return (
		<div className="new-cost">
			<CostForm onSaveCostData={saveCostDataHAndler} />
		</div>
	);
};

export default NewCost;
