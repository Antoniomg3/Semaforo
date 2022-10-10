import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {


	const [encendido, setEncendido, AñadirMorado] = useState("");


	function cambioColor() {
		let random = Math.floor(Math.random()*3)
		if (random == 0){
			setEncendido("rojo");
		}else if (random == 1){
			setEncendido("amarillo")
		}
		else{
			setEncendido("verde");
		}
	} 
	return (
		<div>
			<div className="trafficLight">
				<div className={encendido == "rojo" ? "ilu" : "no"} id="red" onClick={() => setEncendido("rojo")}></div>
				<div className={encendido == "amarillo" ? "ilu" : "no"} id="yellow" onClick={() => setEncendido("amarillo")}></div>
				<div className={encendido == "verde" ? "ilu" : "no"} id="green" onClick={() => setEncendido("verde")}></div>
			</div>
			<div className="boton">
				<button onClick={cambioColor}>Click aquí</button>
			</div>
		</div>
	);
};

export default Home;
