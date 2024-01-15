import TaskCard from "./TaskCard";
import { useContext } from "react";
import { tareaContent } from "../context/TareaContent";

function TaskList() {
  const { tareas } = useContext(tareaContent);

  if (tareas.length === 0) {
    return (
      <h1 className="text-white font-bold text-3xl text-center">
        no hay tareas aun
      </h1>
    );
  }

  return (
    <div className="grid grid-cols-4 gap-2  ">
      {tareas.map((tarea) => (
        <TaskCard key={tarea.id} tarea={tarea} />
      ))}
    </div>
  );
}

export default TaskList;
