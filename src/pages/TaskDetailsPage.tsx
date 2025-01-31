import styles from "../components/styles/TaskDetails.module.css"
import { useSearchParams } from "react-router-dom"

function TaskDetails() {

    // using useSearchParams to get the "title" and "description" parameters from URL
    const [task] = useSearchParams()
    const title = task.get("title")
    const description = task.get("description")
    
    return (
        <>
            <header className={styles.header}>
                <h1>Logo</h1>
            </header>

            <section className={styles.taskDetailsContainer}>
                <div className={styles.taskDescTitle}><h2>Task Description</h2></div>
                <div className={styles.taskDescText}>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
            </section>
        </>
    )
}

export default TaskDetails