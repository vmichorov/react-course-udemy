// Import React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

/* Fast Reloading */
if (module.hot) {
  module.hot.accept();
}

// Create a React component
const App = function () {
  const btnText = "Click me!";

  return (
    <div>
      <label className="label" htmlFor="name">
        Enter name:
      </label>
      <input id="name" />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {btnText}
      </button>
    </div>
  );
};

// Take the component and show it on the screen
ReactDOM.render(<App />, document.getElementById("root"));
