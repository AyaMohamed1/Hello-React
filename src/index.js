import React from "react";
import ReactDOM from "react-dom";
import InputFeild from "./Components/InputField";

const App = () => {
  return (
    <div>
      <h1>Hello!!</h1>
      <h2>Welcome to my First React App..!</h2>
      <InputFeild inputId="Name" />
      <InputFeild inputId="Email" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
