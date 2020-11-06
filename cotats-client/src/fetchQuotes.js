import axios from "axios";
import { API_KEY } from "./config/API_KEY";

export const fetchQuotes = callback => {
	const url = 'https://favqs.com/api/quotes/?filter="programming"&type=tag';
	const key = API_KEY;

	axios
		.get(url, {
			headers: {
				Authorization: `Token token=${key}`,
			},
		})
		.then(res => {
			let response = res.data.quotes;
			let randomQuote = response[Math.floor(Math.random() * response.length)];
			callback(randomQuote);
		})
		.catch(err => console.error(err));
};
