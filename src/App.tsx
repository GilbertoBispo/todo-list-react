import { useState } from "react"
import { useEffect } from "react";
import AddTask from "./components/AddTask"
import TaskList from "./components/TaskList"

// defining the type of the data that the "task" state will have
interface Task {
  id: number;
  title: string;
  description: string;
}

// component App
function App() {
  
  // using a state for the tasks
  const [task, setTasks] = useState<Task[]>(() => {
      const storedTasks = localStorage.getItem("Task")
      return storedTasks ? JSON.parse(storedTasks) : []
    }
  )

  // function to add tasks
  const addTask = (newTask: Task) => {
    setTasks([...task, newTask]);
  }
  
  // function to remove tasks
  function removeTask(taskId: number) {
    const otherTasks = task.filter(tasks => tasks.id != taskId)

    setTasks(otherTasks)
  }

  // using useEffect to store the tasks added
  useEffect(() => {
    localStorage.setItem("Task", JSON.stringify(task))
  }, [task])

  return (
    <>
      <header>  
        <h1>Logo</h1>
      </header>
      <AddTask addTask={addTask}/>
      <TaskList task={task} removeTask={removeTask}/>
    </>
  )
}

export default App