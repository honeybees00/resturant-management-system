import React, { useEffect, useState } from "react";
import { supabase } from "./supabaseClient";

function App() {
	const [items, setItems] = useState([]);
	const [loading, setLoading] = useState(true);

	// ✅ Fetch data from Supabase
	useEffect(() => {
		const fetchItems = async () => {
			const { data, error } = await supabase
				.from("menu") // make sure this matches your table name
				.select("*");

			if (error) {
				console.log("Error:", error);
			} else {
				setItems(data);
			}
			setLoading(false);
		};

		fetchItems();
	}, []);


	const appetizers = items.filter((item) => item.category === "appetizer");

	const drinks = items.filter((item) => item.category === "drink");

	return (
		<div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
			<h1 className="text-3xl font-bold mb-6">Restaurant Menu</h1>

			{/* Loading State */}
			{loading ? (
				<p>Loading...</p>
			) : (
				<div className="w-full max-w-2xl flex flex-col gap-6">
					{/* Appetizers */}
					<div className="flex flex-col gap-3">
						<h2 className="text-xl font-semibold">Appetizers</h2>

						{appetizers.map((item) => (
							<div
								key={item.id}
								className="flex justify-between items-center bg-white p-4 rounded-lg shadow"
							>
								<p className="font-medium">{item.name}</p>
								<p className="text-gray-600">${item.price}</p>
							</div>
						))}
					</div>

					{/* Drinks */}
					<div className="flex flex-col gap-3">
						<h2 className="text-xl font-semibold">Drinks</h2>

						{drinks.map((item) => (
							<div
								key={item.id}
								className="flex justify-between items-center bg-white p-4 rounded-lg shadow"
							>
								<p className="font-medium">{item.name}</p>
								<p className="text-gray-600">${item.price}</p>
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	);
}

export default App;
