import React from "react";
import rigoImg from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import {Link} from "react-router-dom";

export const Home = () => (
	<div className="container">	
			<Link to='/personajes'>
				<img src="https://larepublica.pe/resizer/J2mdTSDMQAesZlmL-iwZYieskUg=/1250x735/top/smart/arc-anglerfish-arc2-prod-gruporepublica.s3.amazonaws.com/public/ONQHIVFLKVAKDKQC5WEQA4MMMI.jpg" 
					className="rounded float-start img_home" alt="..." />
			</Link>
			<Link to='/episodios'>
				<img src="https://blog.personal.com.py/wp-content/uploads/2020/09/los-3-mejores-episodios-de-Rick-y-Morty.jpg" 
					className="rounded float-end img_home" alt="..." />
			</Link>	
	</div>		

	

);
