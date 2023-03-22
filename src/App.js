import logo from "./logo.svg";
import "./App.css";
import "./styles/Global.styles.css";
import {
	Routes,
	Route,
	Link,
	useNavigate,
	useLocation,
	Navigate,
	Outlet,
} from "react-router-dom";
import LoginPage from "./pages/Login.component";
import Navbar from "./components/Navbar.component";
import HomePage from "./pages/Home.component";
import React, { useState, useEffect } from "react";
function App() {
	const [user, setUser] = React.useState(false);
	return (
		<div className="app-container">
			<Routes>
				<Route path="/" element={<Navbar user={user} />}>
					<Route path="/login" element={<LoginPage />} />
					<Route path="/home" element={<HomePage user={user} />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
