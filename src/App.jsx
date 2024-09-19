import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);
  const addValue = () => {
    console.log("clicked", counter);
    setCounter(counter + 1);
  };
  const removeValue = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>Counter App</h1>
      <h2>current value: {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <button onClick={removeValue}>remove value</button>
    </>
  );
}

export default App;
