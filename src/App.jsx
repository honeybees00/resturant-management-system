import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import { Home } from "./pages/Home";
import { OrderPage } from "./pages/OrderPage";

function App() {
	return (
		<BrowserRouter>
			<Navbar />

			<Routes>
				<Route path="/" element={<Home />} />

				<Route path="/order" element={<OrderPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
