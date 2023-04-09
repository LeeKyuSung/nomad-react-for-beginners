import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChangeToDo = (event) => {
    setToDo(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    // setToDos([...toDos, toDo]);
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
    console.log(toDos);
  };
  return (
    <div>
      <h1>To Do List({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChangeToDo}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        ></input>
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((toDo, index) => (
          <li key={index}>{toDo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
