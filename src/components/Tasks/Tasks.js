import { useContext, useEffect } from "react";
import { Button } from "react-bootstrap";

import { Task } from "./Task/Task";
import { AppContext } from "../../App";
// import { AddTask } from "../Forms/AddTask";

import { db } from "../../firebase";
import { collection, query, where, getDocs, updateDoc, doc, deleteDoc } from "firebase/firestore";

import "./Tasks.scss";

export const Tasks = () => {

    const {tasks, setTasks} = useContext(AppContext);

    const handleClearTasks = () => {
        // Change the state of tasks to empty array when called
        setTasks([]);
    }

    const handleStatusChange = (id) => {
        const docRef = doc(db, "tasks", id);
        const updatedTasks = [...tasks];
        tasks.forEach(async task => {
            if(task.id === id){
                task.done = !task.done;
                await updateDoc(docRef, {
                    done: task.done
                })
            }
        })
        setTasks(updatedTasks);
    }

    const removeTask = async (id) => {
        await deleteDoc(doc(db, "tasks", tasks.filter(task => task.id === id)[0].id));
        setTasks(tasks.filter(task => task.id !== id));
    }

    const q = query(collection(db, "tasks"));

    const getTasks = async () => {
        const querySnapshot = await getDocs(collection(db, "tasks"));
        setTasks(querySnapshot.docs.map(doc => ({
            id: doc.id,
            description: doc.data().description,
            done: doc.data().done,
            timestamp: doc.data().timestamp
        })).sort((a, b) => a.timestamp - b.timestamp))
    }

    useEffect(() => {
        getTasks()
    }, []);

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
                {/* <AddTask/> */}
                <Button variant="danger" size="sm" className="btn_tasks" disabled={tasks.length === 0 ? true : false} onClick={handleClearTasks}>Clear Task</Button>
            </div>
        </div>
    );
}