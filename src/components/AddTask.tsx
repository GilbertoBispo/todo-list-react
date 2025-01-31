import styles from "./styles/AddTask.module.css"
import { useState } from "react"
import "../App.css"

// defining the type of the data inside the prop passed from App.tsx to AddTask.tsx
interface Task {
    id: number;
    title: string;
    description: string;
}

// defining the structure of the prop
interface addTaskProp {
    addTask: (task: Task) => void
}

// function that receives the prop from App.tsx and 
function AddTask({ addTask }: addTaskProp) {

    // using states for the title and description of the tasks
    const [taskTitle, setTaskTitle] = useState<string>("")
    const [taskDesc, setTaskDesc] = useState<string>("")

    // function to pass the data from the inputs to the App.tsx component
    function handleSubmit(e: React.FormEvent) {
        e.preventDefault()

        if(!taskTitle.trim() || !taskDesc.trim()) return alert("Preencha algo")
        
        // creating a new object with the data with the input data
        const newTask = {
            id: Date.now(),
            title: taskTitle,
            description: taskDesc
        }

        // passing this object with the data to the function passed as prop and cleaning the inputs
        addTask(newTask)
        setTaskTitle("")
        setTaskDesc("")
    }

    return (
        <section className={styles.addTaskContainer}>
            <div className={styles.title}>
                <h2>Add Task</h2>
            </div>
            <div className={styles.addTaskForm}>
                <form onSubmit={handleSubmit} action="">
                    <label htmlFor="task-name" >Task Name:</label>
                    <input value={taskTitle} onChange={(e)=>(setTaskTitle(e.target.value))} placeholder="Task Name" type="text" name="task-name" id="task-name"/>
                    
                    <label htmlFor="task-description">Task Description:</label>
                    <input value={taskDesc} onChange={(e) => (setTaskDesc(e.target.value))} placeholder="Task Description" type="text" name="task-description" id="task-description"/>

                    <input type="submit" value="Add Task" className={styles.addTaskBtn}/>
                </form>
            </div>
        </section>
    )
}

export default AddTask