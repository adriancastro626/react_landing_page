import React from "react";

import { Navbar } from "./navbar.js";
import { Jumbotron } from "./jumbotron.js";
import { Cards } from "./Cards.js";

//create your first component
export function Home() {
	return (
		<div>
			<Navbar />
			<Jumbotron />
			<Cards />
		</div>
	);
}
