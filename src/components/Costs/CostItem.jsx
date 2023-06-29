import CostDate from "./CostDate";
import "./CostItem.css";
import Card from "../UI/Card";
import React, { useState } from "react";

const CostItem = (props) => {
	const [description, setDescription] = useState(props.description);
    console.log('xxx')

	function handlerClick(e) {
		setDescription("anyText");
	}

	return (
		<Card className="cost-item">
			<CostDate date={props.date} />
			<div className="cost-item__description">
				<h2>{description}</h2>
				<div className="cost-item__price">${props.amount}</div>
			</div>
			<button onClick={handlerClick}> change description</button>
		</Card>
	);
};

export default CostItem;
