import React from "react";
import {createRoot} from "react-dom/client";
import "../assets/tailwind.css";

const test = (
<div>
  <h1 className="text-5xl text-orange-500 font-bold">Welcome to the Popup!</h1> 
  <img src="logoo.png" alt="logoo"/>  

</div>
)

const container = document.createElement("div");
document.body.appendChild(container);

const root = createRoot(container);
root.render(test);
