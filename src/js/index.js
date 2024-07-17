import React from "react";
import ReactDOM from "react-dom/client";
import "../styles/index.css"; 
import SimpleCounter from "./component/SimpleCounter.jsx";
let counter = 0;

const root = ReactDOM.createRoot(document.getElementById("app"));

setInterval(function() {
    root.render(<SimpleCounter seconds={counter} />);
    counter++;
},1000);