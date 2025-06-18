import React from "react";
import Navbar from "./Navbar"
import Jumbotron from "./Jumbotron"
import Card from "./Card"
import Footer from "./Footer"

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return ( 
	<>
	<Navbar />
	<div class="container mt-5 mb-5">
		<Jumbotron />
		<div class="container d-flex justify-content-between">
			<Card />
			<Card />
			<Card />
			<Card />
		</div>
	</div>
	<Footer />
	
	</>
		
		
	);
};

export default Home;