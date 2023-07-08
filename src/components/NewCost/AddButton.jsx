import "./AddButton.css";

const AddButton = (props) => {
	const handlerClick = () => {
        props.onHandlerClick()
	};

	return <button onClick={handlerClick}>Добавить новый расход</button>;
};

export default AddButton;
