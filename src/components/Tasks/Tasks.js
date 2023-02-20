import { useContext } from "react";

import { Task } from "./Task/Task";
import { AppContext } from "../../App";

export const Tasks = () => {

    const {tasks, setTasks} = useContext(AppContext);

    const handleClearTasks = () => {
        // Change the state of tasks to empty array when called
        setTasks([]);
    }

    const handleStatusChange = (id) => {
        const updatedTasks = [...tasks];
        tasks.forEach(task => {
            if(task.id === id){
                task.done = !task.done;
            }
        })
        setTasks(updatedTasks);
    }

    const removeTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id))
    }

    return (
        <div className="tasks">
            <h2>These are the tasks:</h2>
            {tasks.map(
                (task, index) => (
                    <Task 
                        key={index} 
                        task={task}
                        // Send the functions to child component as props
                        onStatusChange={handleStatusChange}
                        onRemoveTask={removeTask}
                    />
                )
            )}
            <hr />

            <button onClick={handleClearTasks} disabled={tasks.length === 0 ? true : false}>Clear Tasks</button>
        </div>
    );
}