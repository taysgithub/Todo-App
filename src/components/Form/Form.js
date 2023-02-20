import uuid from "react-uuid";
import { useState, useContext } from "react"
import { AppContext } from "../../App";

export const Form = () => {

    // Collect the user input in a custom component using controlled components
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState(false);
    const [isValid, setIsValid] = useState(true);

    // access the variables using useContext
    const {tasks, setTasks} = useContext(AppContext);

    const addTask = (event) => {

        // Prevent the auto-refreshing
        event.preventDefault();

        // If the user input is not empty, add the new task to the initial tasks
        if(description.trim() !== ''){
            setTasks([...tasks, {
                id: uuid(),
                description: description,
                done: status
            }]);
            setIsValid(true);
            setDescription('');
            setStatus(false);
        }
        else{
            setIsValid(false);
            setDescription('');
        }
    }


    return (
        <div>
            <h2>Add a new task:</h2>
            { !isValid &&
                <p style={{color: "red"}}>Enter a description</p>
            }
            <form onSubmit={addTask}>
                <label>
                    Description: 
                    <input type="text" maxLength={150} value={description} onChange={(event) => {setDescription(event.target.value)}}/>
                </label>
                <label>
                    Status: 
                    <select value={status} onChange={(event) => {setStatus(event.target.value)}}>
                        <option value="false">Open</option>
                        <option value="true">Completed</option>
                    </select>
                </label>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}