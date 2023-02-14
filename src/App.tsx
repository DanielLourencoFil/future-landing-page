import React from "react";
import { Home } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App(): JSX.Element {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
