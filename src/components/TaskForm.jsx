import { useState, useContext } from "react";
import { tareaContent } from "../context/TareaContent";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTarea } = useContext(tareaContent);

  const handleSubmit = (e) => {
    e.preventDefault();

    createTarea({
      title: title,
      description: description,
    });

    setTitle("");
    setDescription("");
  };
  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4 ">
        <h1 className="text-white mb-2 text-xl font-bold ">Crea tu tarea</h1>
        <input
          placeholder="Escribe tu tarea"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
          className="bg-slate-300 p-3 w-full mb-2"
          autoFocus
        />
        <textarea
          placeholder="Escribe la descripcion de la tarea"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          value={description}
          className="bg-slate-300 p-3 w-full mb-2"
        ></textarea>
        <button className="bg-indigo-500 px-3 py-1 text-white ">Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
