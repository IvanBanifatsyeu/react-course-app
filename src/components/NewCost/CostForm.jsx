import React, { useState } from "react";
import "./CostForm.css";

const CostForm = (props) => {
	const [inputTitle, setInputTitle] = useState("");
	const [inputAmount, setInputAmount] = useState("");
	const [inputDate, setInputDate] = useState("");

;

	const titleChangeHandler = (e) => {
	 setInputTitle(e.target.value)
	};

	const amountChangeHandler = (e) => {
	 setInputAmount(e.target.value)
	};

	const dateChangeHandler = (e) => {
		setInputDate(e.target.value)
	};

	const submitHandler = (event) => {
		event.preventDefault();
		const costData = {
			name: inputTitle,
			amount: inputAmount,
			date: new Date(inputDate),
		};
		props.onSaveCostData(costData)
		setInputTitle('');
		setInputAmount('');
		setInputDate('');

	};

	return (
		<div>
			<form onSubmit={submitHandler}>
				<div className="new-cost__controls">
					<div className="new-cost__control">
						<label>Title</label>
						<input type="text" value={inputTitle} onChange={titleChangeHandler} />
					</div>
					<div className="new-cost__control">
						<label>Sum</label>
						<input
							type="number"
							min="0.01"
							step="0.01"
							value={inputAmount}
							onChange={amountChangeHandler}
						/>
					</div>
					<div className="new-cost__control">
						<label>Date</label>
						<input
							type="date"
							min="2019-01-01"
							max="2023-12-31"
							value={inputDate}
							onChange={dateChangeHandler}
						/>
					</div>
					<div className="new-cost__actions">
						<button type="submit" >
							Add cost
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};
export default CostForm;
