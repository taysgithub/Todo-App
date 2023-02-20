import uuid from "react-uuid";
import { useState } from "react";

import { Task } from "./Task/Task";

export const Tasks = () => {

    const [tasks, setTasks] = useState(
        [
            {
                id: uuid(),
                description: "Walk the dog",
                done: false,
            },
            {
                id: uuid(),
                description: "Buy groceries",
                done: false,
            },
            {
                id: uuid(),
                description: "Wash the car",
                done: false,
            },
        ]
    )

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
            <button onClick={handleClearTasks}>Clear Tasks</button>
        </div>
    );
}