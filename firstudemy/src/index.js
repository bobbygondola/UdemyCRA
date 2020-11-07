// import react and reactDOM libraries
import React from "react";
import ReactDOM from "react-dom";


// create a react component
const App = function () {
    const text = {text: "Click Me"}
    const labelName = {text: "Enter Name"}
  return (
    <div style={{width: "80%", backgroundColor: "red", padding: "5%", margin: "0 auto"}} className="app">
        <label className="label" for ="name">
            {labelName.text}
        </label>
        <input style={{marginLeft: "10px"}} id="name" type="text" />
        <button style={{marginLeft: "15px", backgroundColor: "lightblue", color: "white"}}>
            {text.text}
        </button>
    </div>
    );
};

// take the react component and render on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
