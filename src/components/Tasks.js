import Task from "./Task";

const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    // setTasks([...tasks, newTask])
    <div>
      {tasks.map((task, index) => (
        <Task key={index} task={task} onDelete={onDelete} onToggle={onToggle} />
      ))}
    </div>
  );
};

export default Tasks;
