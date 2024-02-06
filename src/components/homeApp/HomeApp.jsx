import React, { useContext } from "react";
import "./homeApp.style.css";
import { UserContext } from "../../App";

const HomeApp = () => {
	const { setUser } = useContext(UserContext);

	const handleLogout = () => {
		setUser({ username: "", password: "" });
	};

	return (
		<div className="container">
			<button className="logout-btn" onClick={handleLogout}>
				Logout
			</button>
		</div>
	);
};

export default HomeApp;
