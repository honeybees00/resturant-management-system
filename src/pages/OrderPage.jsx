import React, { useState } from "react";
import supabase from "../services/supabaseClient";

export const OrderPage = () => {
	const [customerName, setCustomerName] = useState("");
	const [orderText, setOrderText] = useState("");
	const [success, setSuccess] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();

		const { error } = await supabase.from("orders").insert([
			{
				customer_name: customerName,
				order_text: orderText,
			},
		]);

		if (error) {
			console.error("Error saving order:", error);
		} else {
			setSuccess(true);
			setCustomerName("");
			setOrderText("");
		}
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-100">
			<div className="bg-white p-8 rounded-xl shadow-lg w-96">
				<h1 className="text-2xl font-bold mb-4 text-center">
					Place Your Order
				</h1>

				<form onSubmit={handleSubmit} className="space-y-4">
					<input
						type="text"
						placeholder="Customer Name"
						value={customerName}
						onChange={(e) => setCustomerName(e.target.value)}
						className="w-full border p-2 rounded"
					/>

					<textarea
						placeholder="What would you like to order?"
						value={orderText}
						onChange={(e) => setOrderText(e.target.value)}
						className="w-full border p-2 rounded h-32"
					/>

					<button
						type="submit"
						className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
					>
						Submit Order
					</button>
				</form>

				{success && (
					<p className="text-green-600 text-center mt-4">
						Order sent successfully!
					</p>
				)}
			</div>
		</div>
	);
};
