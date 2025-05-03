import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";

import Home from "./pages/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Profile from "./components/Profile";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="overflow-hidden">
			<Header />
			<Routes>
				{/* Public routes */}
				<Route path="/" element={<Home />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/login" element={<Login />} />

				{/* Protected routes */}
				<Route
					path="/profile"
					element={
						<PrivateRoute>
							<Profile />
						</PrivateRoute>
					}
				/>
			</Routes>
			<Sidebar />
			<Footer />
		</div>
	);
}

export default App;
