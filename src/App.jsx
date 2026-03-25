import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import {Navbar} from "./components/Navbar";
import { Home } from "./pages/Home";
import { OrderPage } from "./pages/OrderPage";
import {ChatbotForm} from "./pages/Chatbot";
import {Menu} from "./pages/Menu"

function App() {
	return (
		<BrowserRouter>
			<Navbar />

			<Routes>
				<Route path="/" element={<Home />} />

				<Route path="/order" element={<OrderPage />} />
				<Route path="/chatbot" element={<Chatbot/>} />
				<Route path="/menu" element={<Menu/>}/> 


				           
			</Routes>
		</BrowserRouter>
	);
}

export default App;
