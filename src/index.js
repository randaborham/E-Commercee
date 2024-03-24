import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Productprovider from "./contexts/ProductContext";
import SidebarProvider from "./contexts/SidebarContext";
import CartProvider from "./contexts/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SidebarProvider>
    <CartProvider>
      <Productprovider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </Productprovider>
    </CartProvider>
  </SidebarProvider>
);
