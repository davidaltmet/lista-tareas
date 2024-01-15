import { createContext, useState, useEffect } from "react";
import { tareas as data } from "../data/task";

export const tareaContent = createContext();

export function TareaContentProvider(props) {
    
  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    setTareas(data);
  }, []);

  function createTarea(tarea) {
    setTareas([
      ...tareas,
      {
        title: tarea.title,
        id: tareas.length,
        description: tarea.description,
      },
    ]);
  }

  function eliminarTarea(tareaId) {
    setTareas(tareas.filter((tarea) => tarea.id !== tareaId));
  }

  return (
    <tareaContent.Provider
      value={{
        tareas: tareas,
        eliminarTarea: eliminarTarea,
        createTarea: createTarea,
      }}
    >
      {props.children}
    </tareaContent.Provider>
  );
}
