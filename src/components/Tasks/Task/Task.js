// import parameters using destructuring assignment
export const Task = ({onStatusChange, onRemoveTask, task}) => {

    return (
        <div>
            <hr />
            <h3>{task.description}</h3>
            <div>Id: {task.id}</div>
            <div>Status: {task.done ? "Completed" : "Open"}</div>   
            <button onClick={() => {onStatusChange(task.id)}}>Change Status</button> 
            <button onClick={() => {onRemoveTask(task.id)}}>Remove Task</button>        
        </div>
    )
}