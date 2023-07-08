import CostItem from "./CostItem";
import Card from "../UI/Card";
import "./Costs.css";
import CostsFilter from "./CostsFilter";
import React, { useState } from "react";
import CostsDiagram from "./CostDiagram";

const Costs = (props) => {
	const [selectedYear, setSelectedYear] = useState("2023");

	const yearChangeHandler = (year) => {
		setSelectedYear((prevYear) => {
			return year;
		});
	};
	const costsSelected = props.costs.filter(
		(item) => item.date.getFullYear() === parseInt(selectedYear)
	);

	let costsContent = <p className="text">There were no purchases this year</p>
	if (costsSelected.length > 0) {costsContent = costsSelected.map((item) => (
		<CostItem
			key={item.id}
			date={item.date}
			description={item.description}
			amount={item.amount}
		/>
	))}

	return (
		<div>
			<Card className="costs">
				<CostsFilter year={selectedYear} onChangeYear={yearChangeHandler} />
				<CostsDiagram costs={costsSelected} />
				{costsContent}
			</Card>
		</div>
	);
};

export default Costs;
