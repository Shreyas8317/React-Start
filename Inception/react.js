import React from "react";
import ReactDOM from "react-dom"

const parent = React.createElement("div",{id:"parent"},
    [React.createElement("div",{id : "child"},
        [React.createElement("h1",{id :"rheading"},"Nested React"),React.createElement("h2",{id :"rrheading"},"Nested React")]
    )],[React.createElement("div",{id : "child2"},[React.createElement("h1",{},"Hello Child2")],React.createElement("h2",{},"Hello Children"))]
);










console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);