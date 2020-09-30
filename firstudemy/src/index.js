// import react and reactDOM libraries
import React from "react";
import ReactDOM from "react-dom";


// create a react component
const App = function () {
    const text = {text: "Click Me"}
    const labelName = {text: "Enter Name"}
  return (
    <div>
        <label className="label" for ="name">
            {labelName.text}
        </label>
        <input id="name" type="text" />
        <button style={{backgroundColor: "blue", color: "white"}}>
            {text.text}
        </button>
    </div>
    );
};

// take the react component and render on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
