// Imported packages
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Import components
import { Navigation } from "./components";

// Import styles
import "./App.scss";
import { TodayPage } from "./pages";
import { uuid } from "uuidv4";

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
          id: uuid(),
          title: "Clean your room",
          status: "Not Started",
          date: new Date().toLocaleDateString('en-US'),
          dueDate: "",
          notes: [],
        },
        {
          id: uuid(),
          title: "Get groceries",
          status: "Not started",
          date: new Date().toLocaleDateString('en-US'),
          dueDate: "",
          notes: "",
        },
      ];
      lS.setItem("wilp_todo", JSON.stringify(mockData));
    } else {
      setTodos(JSON.parse(lS.getItem("wilp_todo")));
    }
  }, []);

  return (
    <Router>
      <div className="App">
        <Navigation />
        <div id="todo-container">
          <Routes>
            <Route path="/today" element={<TodayPage data={todos} />} />
          </Routes>
          {todos.map((item, key) => {
            return (
              <div className="todoItem" key={key}>
                <input type={"checkbox"} className="checkbox" />
                <p>{item.title}</p>{" "}
              </div>
            );
          })}
        </div>
      </div>
    </Router>
  );
}

export default App;
