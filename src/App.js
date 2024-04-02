import Button from "./Button";
import styles from "./App.module.css"
import { useState , useEffect } from "react";
function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  console.log("render");
  useEffect(() => {
    console.log("call the api");
  }, [])

  useEffect(() => {
    console.log("search for count");
  }, [counter])

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
