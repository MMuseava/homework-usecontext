import { createContext, useState } from "react";
import "./App.css";
import LoginPage from "./components/loginPage/LoginPage";
import HomeApp from "./components/homeApp/HomeApp";

export const UserContext = createContext(null);
function App() {
	const [user, setUser] = useState({ username: "", password: "" });
	const [isPopapOpen, setIsPopapOpen] = useState(false);

	const handleLoginClick = () => {
		setIsPopapOpen(true);
	};

	return (
		<UserContext.Provider value={{ user, setUser }}>
			<div className="App">
				<nav>
					<h1>Home</h1>
					<h1>About Us</h1>
					<button onClick={handleLoginClick}>Login</button>
				</nav>
				{/* {isPopapOpen && <LoginPage setIsPopupOpen={setIsPopapOpen} />} */}
				{!user.username ? (
					isPopapOpen && <LoginPage setIsPopupOpen={setIsPopapOpen} />
				) : (
					<HomeApp />
				)}
			</div>
		</UserContext.Provider>
	);
}

export default App;
