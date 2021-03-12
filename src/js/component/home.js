import React from "react";

import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Cards from "./Cards";

//create your first component
export function Home() {
    return (
        <div>
            <Navbar />
            <Jumbotron />
            <Cards />
        </div>

    )
}
