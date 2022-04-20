import logo from "./logo.svg";
import "./App.css";
import "./pages/Pages.css";
import Sidebar from "./pages/Sidebar";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<main>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Sidebar />}></Route>
					</Routes>
				</BrowserRouter>
			</main>
		</div>
	);
}

export default App;
