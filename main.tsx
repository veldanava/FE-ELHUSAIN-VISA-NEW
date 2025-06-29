// main.tsx atau index.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "app/root"; // atau "./App" kalau pakai nama itu

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App /> {/* HARUS ADA DI DALAM BrowserRouter */}
    </BrowserRouter>
  </React.StrictMode>
);
