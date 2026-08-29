import LoginStatus from "./LoginStatus";
import { useContext } from "react";
import TaskContext from "./tasks/tasksContext";

const useTasks = () => useContext(TaskContext);

const NavBar = () => {
  const { tasks } = useTasks();
  return (
    <nav className="navbar d-flex justify-content-between">
      <span className="badge text-bg-secondary">{tasks.length}</span>
      <LoginStatus />
    </nav>
  );
};

export default NavBar;
