import CostItem from "./CostItem";
import Card from "../UI/Card";
import "./Costs.css";
import CostsFilter from "./CostsFilter";
import React, { useState } from "react";

const Costs = (props) => {
	const [selectedYear, setSelectedYear] = useState("2020");

	const yearChangeHandler = (year) => {
		setSelectedYear((prevYear) => {
			return year
		});
	};
    const costsSelected = props.costs.filter(item => item.date.getFullYear() === parseInt(selectedYear))

	return (
		<div>
			<Card className="costs">
				<CostsFilter year={selectedYear} onChangeYear={yearChangeHandler} />

				{costsSelected.map((item) =>  (
						<CostItem
							key={item.id}
							date={item.date}
							description={item.description}
							amount={item.amount}
						/>
					)
					
					
				)}
			</Card>
		</div>
	);
};

export default Costs;
