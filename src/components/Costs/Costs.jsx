
import CostItem from "./CostItem";
import Card from "../UI/Card";
import "./Costs.css";
import CostsFilter from "./CostsFilter";
import React, {useState} from "react";


const Costs = (props) => {
	const [selectedYear, setSelectedYear] = useState('2020')

	const yearChangeHandler = (year) => {
	
		setSelectedYear((prevYear) => {console.log(year)})
	
	
	};
	return (
		<div>
			<Card className="costs">
			<CostsFilter year={selectedYear} onChangeYear={yearChangeHandler} />
			{props.costs.map(item=> <CostItem
					date={item.date}
					description={item.description}
					amount={item.amount}
				/>)}
			
			</Card>
		</div>
	);
};

export default Costs;
