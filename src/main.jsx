import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { app } from "../firebaseConfig.js";

createRoot(document.getElementById("root")).render(<App />);
