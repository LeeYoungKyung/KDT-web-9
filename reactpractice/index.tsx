import React from "react";
import ReactDOM from "react-dom/client";

// css 파일을 불러온다.
import "./tailwind.css";
import App from "./src/App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
