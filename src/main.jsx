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
import ErrorBoundary from "./components/ErrorBoundary";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Router>
			<ErrorBoundary>
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
			</ErrorBoundary>
		</Router>
	</StrictMode>
);
