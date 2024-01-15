import { useContext } from "react";
import { tareaContent } from "../context/TareaContent";

function TaskCard({ tarea }) {
  const { eliminarTarea } = useContext(tareaContent);
  return (
    <div className="bg-gray-800 text-white p-4 rounded-md grid gap-2">
      <h1 className="text-xl font-bold capitalize">{tarea.title}</h1>
      <p className="text-gray-500 text-sm">{tarea.description}</p>
      <button
        className="bg-red-500 px-2 py-1 rounded-md hover:bg-red-400"
        onClick={() => eliminarTarea(tarea.id)}
      >
        Eliminar tarea
      </button>
    </div>
  );
}

export default TaskCard;
