import { useState, createContext } from "react";
import { Header } from "../Header/Header";
import { Tasks } from "../Tasks/Tasks";
import { data } from "../../Data";
import "./Home.scss";

// create and export an AppContext using createContext()
export const AppContext = createContext();

export const Home = () => {

  const [tasks, setTasks] = useState(data);

  return (
    <div className="home">
      {/* Serve the appcontext to make it accessible across the app */}
      <AppContext.Provider value = {{tasks, setTasks }}>
        {/* Set up structure using components */}
        <Header/>
        <div className="appBodyContainer">
          <Tasks/>
        </div>
      </AppContext.Provider>
    </div>
  );
}