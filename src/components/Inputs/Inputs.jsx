import { useState } from "react";
import styles from "./Inputs.module.css";

export default function Inputs() {
	const [rost, setRost] = useState(0);
	const [massa, setMassa] = useState(0);
	const [res, setRes] = useState("");
	const [comment, setComment] = useState("");

	const BMI = (kg, m) => {
		let bmi = parseFloat(kg) / parseFloat(m) ** 2;

		if (bmi < 18.5) {
			setRes(bmi);
			setComment("Недовес");
		} else if (bmi > 18.5 && bmi < 24.9) {
			setRes(bmi);
			setComment("Нормально");
		} else if (bmi > 24.9 && bmi < 30.9) {
			setRes(bmi);
			setComment("Ожирение");
		} else {
			setRes(bmi);
			setComment("сильное ожирение");
		}
	};

	return (
		<div className={styles.inputs}>
			<form className={styles.container} action="#">
				<h2 className={styles.title}>Рост: </h2>
				<input
					className={styles.input}
					type="number"
					onChange={e => setRost(e.target.value)}
					value={rost}
				/>
				<h2 className={styles.title}>Весь: </h2>
				<input
					className={styles.input}
					type="number"
					onChange={e => setMassa(e.target.value)}
					value={massa}
				/>
				<button className={styles.button} onClick={() => BMI(massa, rost)}>
					OK
				</button>
			</form>
			<div className={styles.text}>
				<h2>{res}</h2>
				<h2>{comment}</h2>
			</div>
		</div>
	);
}
