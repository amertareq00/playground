import { useReducer } from "react";
import "./App.css";
import AuthProvider from "./state-management/AuthProvider";
import TaskContext from "./state-management/contexts/tasksContext";
import HomePage from "./state-management/HomePage";
import NavBar from "./state-management/NavBar";
import tasksReducer from "./state-management/reducers/tasksReducer";

function App() {
  const [tasks, tasksDispatch] = useReducer(tasksReducer, []);

  return (
    <AuthProvider>
      <TaskContext.Provider value={{ tasks, dispatch: tasksDispatch }}>
        <NavBar />
        <HomePage />
      </TaskContext.Provider>
    </AuthProvider>
  );
}

export default App;
