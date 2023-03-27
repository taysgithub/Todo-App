import { useContext, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Task } from "./Task/Task";
import { AppContext } from "../../App";
import { db } from "../../firebase";
import { collection,  updateDoc, doc, deleteDoc, onSnapshot, query } from "firebase/firestore";
import "./Tasks.scss";

export const Tasks = () => {

    const {tasks, setTasks} = useContext(AppContext);
    const [isLoading, setIsLoading] = useState(true);

    const handleClearTasks = () => {
        try {
            tasks.forEach(async task => {
                await deleteDoc(doc(db, "tasks", task.id));
            });
        } catch(err){
            alert("Error, please try again.");
            console.log(err);
        }
    }

    const handleStatusChange = (id) => {
        const docRef = doc(db, "tasks", id);
        try {
            tasks.forEach(async task => {
                if(task.id === id){
                    task.done = !task.done;
                    await updateDoc(docRef, {
                        done: task.done
                    })
                }
            });
        } catch(err){
            alert("Error, please try again.");
            console.log(err);
        }
    }

    const removeTask = async (id) => {
        try{
            await deleteDoc(doc(db, "tasks", tasks.filter(task => task.id === id)[0].id));
        } catch(err){
            alert("Error, please try again.");
            console.log(err);
        }
    }

    const subscribeTasks = () => {
        setIsLoading(true);
        const q = query(collection(db, "tasks"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            if(querySnapshot.docs.length !== 0){
                setTasks(querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    description: doc.data().description,
                    done: doc.data().done,
                    timestamp: doc.data().timestamp
                })).sort((a, b) => a.timestamp - b.timestamp));
            }
            else {
                setTasks([]);
            }
            setIsLoading(false);
        },
        (err) => {
            alert("Error, please try again.");
            console.log(err);
        });
    }

    useEffect(() => {
        subscribeTasks();
    },[]);

    return (
        <div className="tasks_container">
            <div className="title">{isLoading? "Loading..." : tasks.length === 0 ? "No Task" : "All Tasks"}</div>
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