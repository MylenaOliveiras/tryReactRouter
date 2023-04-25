import { useState } from "react";
import { ITask } from "../Task/types";
import Card from "../Card/Card";

function Kanban() {
  const [notas, setNotas] = useState<ITask[]>([]);

  function addTask(task: ITask) {
    setNotas([...notas, task]);
  }

  function removeTask(task: ITask) {
    setNotas(notas.filter((tarefa) => task.descricao !== tarefa.descricao));
  }

  function updateTask(task: ITask) {
    const novaTask = { ...task };
    if (task.status === "To Do") {
      novaTask.status = "In Progress";
    } else if (task.status === "In Progress") {
      novaTask.status = "Done";
    }

    setNotas([
      ...notas.filter((tarefa) => task.descricao != tarefa.descricao),
      novaTask,
    ]);
  }

  function gobackTask(task: ITask) {
    const newTask = { ...task };
    if (task.status === "In Progress") {
      newTask.status = "To Do";
    } else if (task.status === "Done") {
      newTask.status = "In Progress";
    }

    setNotas([
      ...notas.filter((tarefa) => task.descricao != tarefa.descricao),
      newTask,
    ]);
  }

  return (
    <section className="flex gap-2 justify-center h-auto">
      <div>
        <Card
          status={"To Do"}
          tasks={notas}
          addTask={addTask}
          removeTask={removeTask}
          updateTask={updateTask}
          gobackTask={gobackTask}
        />
      </div>
      <div>
        <Card
          status={"In Progress"}
          tasks={notas}
          addTask={addTask}
          removeTask={removeTask}
          updateTask={updateTask}
          gobackTask={gobackTask}
        />
      </div>
      <div>
        <Card
          status={"Done"}
          tasks={notas}
          addTask={addTask}
          removeTask={removeTask}
          updateTask={updateTask}
          gobackTask={gobackTask}
        />
      </div>
    </section>
  );
}
export default Kanban;
