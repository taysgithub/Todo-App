import "./Task.scss";
import { Button } from "react-bootstrap";

// import parameters using destructuring assignment
export const Task = ({onStatusChange, onRemoveTask, task}) => {

    return (
        <div className="task">
            <h3 className="task_title">{task.description}</h3>
            <div className="taskId">Id: {task.id}</div>
            <div className="status">Status: {task.done ? <span className="completed">Completed</span> : <span className="open">Open</span>}</div> 
            <div className="btns_card">
                <Button variant="outline-primary" size="sm" className="btn_card" onClick={() => {onStatusChange(task.id)}}>Change Status</Button> 
                <Button variant="outline-danger" size="sm" className="btn_card" onClick={() => {onRemoveTask(task.id)}}>Remove Task</Button>
            </div>
                
        </div>
    )
}