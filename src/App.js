// Imported packages
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Import components
import { Navigation } from "./components";

// Import styles
import "./App.scss";
import { CompletedPage, TodayPage, Settings } from "./pages";
import { v4 as uuidv4 } from "uuid";

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
          id: uuidv4(),
          title: "Clean your room",
          status: "Not Started",
          date: new Date().toLocaleDateString("en-US"),
          dueDate: new Date().toLocaleDateString("en-US"),
          notes: [],
        },
        {
          id: uuidv4(),
          title: "Get groceries",
          status: "completed",
          date: new Date().toLocaleDateString("en-US"),
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
            <Route path="/" element={<TodayPage data={todos} />} />
            <Route path="/completed" element={<CompletedPage data={todos} />} />
            <Route path="/settings" element={<Settings data={todos} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
