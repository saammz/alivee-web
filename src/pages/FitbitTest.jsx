import React, { useState } from "react";

const styles = {
	body: {
		fontFamily: "Arial, sans-serif",
		padding: "20px",
	},
	container: {
		maxWidth: "600px",
		margin: "0 auto",
	},
	input: {
		display: "block",
		width: "100%",
		padding: "10px",
		margin: "10px 0",
		fontSize: "16px",
	},
	button: {
		display: "block",
		width: "100%",
		padding: "10px",
		margin: "10px 0",
		fontSize: "16px",
	},
	output: {
		marginTop: "20px",
	},
	pre: {
		backgroundColor: "#f4f4f4",
		padding: "10px",
		border: "1px solid #ddd",
		overflowX: "auto",
	},
};

const FitbitApiTest = () => {
	const [responseOutput, setResponseOutput] = useState("");

	// Function to make API request to link Fitbit account
	const linkFitbit = async () => {
		const baseUrl =
			"https://a15b-2c0f-f5c0-51c-ab0e-2d66-7836-d4e8-6b1e.ngrok-free.app"; // call godfrey to get the url
		const token = "your_access_token"; // login on postman and get the token and paste it here

		try {
			const response = await fetch(`${baseUrl}/api/v1/fitbit/connect`, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					"Authorization": "Bearer " + token,
				},
			});

			console.log("Response: ", response); // remember to send a snapshot of this to godfrey

			const data = await response.json();
			console.log("Data: ", data); // remember to send a snapshot of this to godfrey
			setResponseOutput(JSON.stringify(data, null, 2));

			if (data.redirectUrl) {
				// Perform the redirect to Fitbit's authorization page
				window.location.href = data.redirectUrl;
			} else {
				setResponseOutput(JSON.stringify(data, null, 2));
			}
		} catch (error) {
			console.error("Error:", error);
			setResponseOutput(`Error: ${error.message}`);
		}
	};

	return (
		<div style={styles.container}>
			<h1>Fitbit API Test</h1>
			<button style={styles.button} onClick={linkFitbit}>
				Link Fitbit Account
			</button>
			<h2>API Responses</h2>
			<div style={styles.output}>
				<pre style={styles.pre}>{responseOutput}</pre>
			</div>
		</div>
	);
};

export default FitbitApiTest;
