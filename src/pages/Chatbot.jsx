import React, { useEffect, useState } from "react";
import supabase from "../services/supabaseClient";

export const ChatbotForm = () => {
	const [products, setProducts] = useState([]);
	const [messages, setMessages] = useState([]);
	const [question, setQuestion] = useState("");
	const [loading, setLoading] = useState(false);

	async function fetchMenu() {
		const { data, error } = await supabase.from("menu_items").select();

		if (error) {
			console.error("Error fetching menu.", error);
		} else {
			setProducts(data);
		}
	}

	useEffect(() => {
		fetchMenu();
	}, []);

	const instruction = `You are a happy helpful assistant in my online restaurant.

Menu Items:
${products.map((p) => `${p.name} - $${p.price}`).join("\n")}

You will take order requests from customers and send them to staff.

Always confirm the order.
When the order is confirmed say thank you for the support and give an order summary with the total.
When the order is confirmed say Goodbye and give a summary of the total.

Format Rule: Only respond in plain text. Do not use HTML or Markdown.
`;

	const onChangeQuestion = (e) => {
		setQuestion(e.target.value);
	};

	const onsubmitForm = async (e) => {
		e.preventDefault();

		const url = import.meta.env.VITE_AI_CHATBOT_URL;
		const token = import.meta.env.VITE_AI_CHATBOT_KEY;

		const history = [...messages, { role: "user", text: question }];
		setMessages(history);
		setLoading(true);

		const apiHistory = history.map((item) => ({
			role: item.role,
			parts: [{ text: item.text }],
		}));

		const result = await fetch(url, {
			method: "POST",
			headers: {
				"x-goog-api-key": token,
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				system_instruction: { parts: [{ text: instruction }] },
				contents: apiHistory,
			}),
		});

		const data = await result.json();

		const answer = data.candidates[0].content.parts[0].text;

		const response = { role: "model", text: answer };

		setMessages([...history, response]);
		setQuestion("");
		setLoading(false);
	};

	return (
		<form onSubmit={onsubmitForm}>
			<label>Chat History</label>

			<div className="mt-3 mb-3 border rounded-3 p-3">
				{messages.map((item, i) => (
					<p
						key={i}
						className={item.role === "model" ? "text-success" : "text-dark"}
					>
						{item.text}
					</p>
				))}

				{loading && <p>Loading...</p>}
			</div>

			<div className="mb-3">
				<input
					type="text"
					className="form-control"
					value={question}
					onChange={onChangeQuestion}
					messages="Ask your question"
				/>
			</div>

			<button className="btn btn-success">Send</button>
		</form>
	);
};
