import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, createContext } from "react";
import { Home } from "./components/Home/Home";
import { Header } from "./components/Header/Header";
import { AddTask } from "./components/Forms/AddTask";
import { Help } from "./components/Help/Help";
import { PageNotFound } from "./components/PageNotFound/PageNotFound";
import './App.scss';
import { HelpAddTask } from "./components/Help/Help-add";
import { HelpIntroduction } from "./components/Help/Help-introduction";
import {HelpRemoveTask} from "./components/Help/Help-remove";

// create and export an AppContext using createContext()
export const AppContext = createContext();

function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <div className="app">
      <AppContext.Provider value = {{tasks, setTasks }}>
        <BrowserRouter>
          <Header/>
          <div className="main">
            <Routes>
              <Route  path="/" element={<Home/>} />
              <Route  path="/help" element={<Help/>} >
                <Route  path="introduction" element={<HelpIntroduction/>} />
                <Route  path="add" element={<HelpAddTask/>} />
                <Route  path="remove" element={<HelpRemoveTask/>} />
              </Route>
              <Route path="*" element={<PageNotFound/>}/>  
              <Route  path="/add" element={<AddTask/>} />    
            </Routes>
          </div>
        </BrowserRouter>
      </AppContext.Provider>
    </div>
  );
}

export default App;
