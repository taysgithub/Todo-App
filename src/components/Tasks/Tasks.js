import { useContext } from "react";
import { Button } from "react-bootstrap";

import { Task } from "./Task/Task";
import { AppContext } from "../Home/Home";
import { AddTask } from "../Forms/AddTask";

import "./Tasks.scss";

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
        <div className="tasks_container">
            <div className="title">{tasks.length === 0 ? "No Tasks" : "All Tasks"}</div>
            <div className="tasks">
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
            </div>
            <hr />
            <div className="btnsContainer">
                <AddTask/>
                <Button variant="danger" size="sm" className="btn_tasks" disabled={tasks.length === 0 ? true : false} onClick={handleClearTasks}>Clear Task</Button>
            </div>
        </div>
    );
}