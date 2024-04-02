import Button from "./Button";
import styles from "./App.module.css"
import { useState , useEffect } from "react";
function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("render");
  useEffect(() => {
    console.log("call the api");
  }, [])

  useEffect(() => {
    if(keyword.length >5){
      console.log("search for", keyword);      
    }
  }, [keyword])
// console.log("search for", keyword);

  useEffect(() => {
    console.log("search for count");
  }, [counter])

  return (

    <div>
      <input value={keyword}
        onChange={onChange}
        type="text"
        placeholder="search"
      ></input>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
