import AddButton from "./AddButton";
import React, { useState } from "react";
import CostForm from "./CostForm";
import "./NewCost.css";

const NewCost = (props) => {
	const [isFormVisible, setisFormVisible] = useState(false);

	const saveCostDataHAndler = (inputCostData) => {
		const cosData = {
			...inputCostData,
			id: Math.random().toString(),
		};
		props.onAddCost(cosData);
		setisFormVisible(!isFormVisible);
	};

	const handlerClick = () => {
		setisFormVisible(!isFormVisible);
	};

	let NewCostContent = isFormVisible ? (
		<CostForm onSaveCostData={saveCostDataHAndler} onHandlerCancel={handlerClick}/>
	) : (
		<AddButton onHandlerClick={handlerClick} />
	);

	return <div className="new-cost">{NewCostContent}</div>;
};

export default NewCost;
