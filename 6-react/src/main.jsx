import { createElement } from 'react';
import { createRoot } from 'react-dom/client';


const rootElement = document.querySelector("#root");

const tasks = ["Read Js Book","Sleep Well","Eat Less"]

const root = createRoot(rootElement);
root.render(
  createElement("div", null, 
  createElement("h1", null, "Todo App"), createElement(
    "form",
     null, 
    createElement("input", null, null),
    createElement("button",null,"Add New"),
             ),
  createElement(
    "ul",
    null,
    // createElement("li",null,"Read js book"),
    // createElement("li",null,"Eat less"),
    // createElement("li",null,"Sleep Early"),
    tasks.map((task,index) =>  createElement("li",
    {key: index, className: "List pb-5" , title: "Hello"},
    task)
    )
           )
         ))

