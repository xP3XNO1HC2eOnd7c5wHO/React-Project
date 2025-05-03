import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

import ProductProvider from "./contexts/ProductContext";
import SidebarProvider from "./contexts/SidebarContext";
import CartProvider from "./contexts/CartContext";
import CurrencyProvider from "./contexts/CurrencyContext.jsx";
import { AuthProvider } from "./contexts/AuthContext";

// Check if we're in competition environment
const isCompetition = import.meta.env.VITE_COMPETITION_MODE === 'true';
if (isCompetition) {
	console.log('Running in competition mode');
}

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Router>
			<AuthProvider>
				<SidebarProvider>
					<CurrencyProvider>
						<CartProvider>
							<ProductProvider>
								<App />
							</ProductProvider>
						</CartProvider>
					</CurrencyProvider>
				</SidebarProvider>
			</AuthProvider>
		</Router>
	</StrictMode>
);
