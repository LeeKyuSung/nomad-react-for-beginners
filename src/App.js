import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function Hello() {
  useEffect(() => {
    console.log("Hello");
    return () => console.log("Bye");
  }, []);
  return <div>Hello</div>;
}
function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  const [showing, setShowing] = useState(false);
  const onClick2 = () => setShowing((prev) => !prev);
  console.log("i run all the time");
  useEffect(() => {
    console.log("CALL THE API...");
  }, []);
  useEffect(() => {
    if (keyword.length > 5) console.log("SEARCH FOR", keyword);
  }, [keyword]);
  useEffect(() => {
    console.log("counter changed", counter);
  }, [counter]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here "
      />
      <h1 className={styles.title}>{counter}</h1>
      <button onClick={onClick}>click me</button>
      <button onClick={onClick2}>{showing ? "Hide" : "Show"}</button>
      {showing ? <Hello /> : null}
    </div>
  );
}

export default App;
