import LoginStatus from "./auth/LoginStatus";
import { useContext } from "react";
import TaskContext from "./tasks/tasksContext";
import useCounterStore from "./counter/store";

const useTasks = () => useContext(TaskContext);

const NavBar = () => {
  const { tasks } = useTasks();
  const counter = useCounterStore((s) => s.counter);

  console.log("Render NavBar");

  return (
    <nav className="navbar d-flex justify-content-between">
      <span className="badge text-bg-secondary">{counter}</span>
      <LoginStatus />
    </nav>
  );
};

export default NavBar;
