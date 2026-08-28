import { useReducer } from "react";
import "./App.css";
import tasksReducer from "./state-management/reducers/tasksReducer";
import HomePage from "./state-management/HomePage";
import NavBar from "./state-management/NavBar";
import TaskContext from "./state-management/contexts/tasksContext";
import authReducer from "./state-management/reducers/authReducer";
import AuthContext from "./state-management/contexts/authContext";
import LoginStatus from "./state-management/LoginStatus";

function App() {
  const [tasks, tasksDispatch] = useReducer(tasksReducer, []);
  const [user, authDispatch] = useReducer(authReducer, "");

  return (
    <AuthContext.Provider value={{ user, dispatch: authDispatch }}>
      <TaskContext.Provider value={{ tasks, dispatch: tasksDispatch }}>
        <NavBar />
        <HomePage />
      </TaskContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
