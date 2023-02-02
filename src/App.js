// Imported packages
import { useState, useEffect } from "react";

// Import styles
import "./App.scss";

// App component
function App() {
  // States
  const [todos, setTodos] = useState([{}]);

  // On first page load
  useEffect(() => {
    // creating a localStorage variables for ease of use
    const lS = window.localStorage;

    if (!lS.getItem("wilp_todo")) {
      const mockData = [
        {
          title: "Clean your room",
          status: "Not Started",
          date: "",
          dueDate: "",
          notes: []
        },
        {
          title: 'Get groceries',
          status: 'Not started',
          date: new Date(),
          dueDate: '',
          notes: ''
        }
      ];
      lS.setItem("wilp_todo", JSON.stringify(mockData));
    } else {
      setTodos(JSON.parse(lS.getItem("wilp_todo")));
    }
  }, []);

  return (
    <div className="App">
      <h1> Todo App</h1>
      <div id="todo-container">
        {todos.map((item, key) => {
          return (
            <div className="todoItem" key={key}>
              <input type={"checkbox"} className='checkbox'/>
              <p>{item.title}</p>{" "}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
