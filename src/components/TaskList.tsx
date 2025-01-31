import styles from '../components/styles/TaskList.module.css'
import { useNavigate } from 'react-router-dom';
import "../App.css"

// defining the interface of the tasks passed as props
interface Task {
    id: number;
    title: string;
    description: string;
}

// defining the interface of the props we're receiving from App.js
interface TaskListProps {
    task: Task[],
    removeTask: (taskId: number) => void
}

// component TaskList
const TaskList = ({ task, removeTask}: TaskListProps) => {

    // using useNavigate hook to set a URL and its Query Params
    const navigate = useNavigate()

    function onViewDetailsClick(task: Task) {
        navigate(`/taskDetails?title=${task.title}&description=${task.description}`)
    }

    return (
        <section className={styles.taskListContainer}>
            <div className={styles.title}>
                <h2>Tasks</h2>
            </div>

            <ul className={styles.taskList}>

                {task.map((taskData) => (
                    <li key={taskData.id}>
                        <h3 className={styles.taskTitle}>{taskData.title}</h3>
                        <div className={styles.taskListBtn}>
                            <button onClick={() => {removeTask(taskData.id)}} className={styles.deleteBtn}><img src="/x.svg" alt="Delete Icon" /></button>
                            <button onClick={() => {onViewDetailsClick(taskData)}} className={styles.viewDescriptionBtn}><img src="/three-dots.svg" alt="Ellipsis Icon" /></button>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default TaskList;