import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, createContext } from "react";
import { Home } from "./components/Home/Home";
import { Header } from "./components/Header/Header";
import { AddTask2 } from "./components/Forms/AddTask2";
import { Help } from "./components/Help/Help";
import { data } from "./Data";
import './App.scss';
import { Help_Add_Task } from "./components/Help/Help-add";
import { Help_Introduction } from "./components/Help/Help-introduction";
import {Help_Remove_Task} from "./components/Help/Help-remove";

// create and export an AppContext using createContext()
export const AppContext = createContext();

function App() {
  const [tasks, setTasks] = useState(data);

  return (
    <div className="app">
      <AppContext.Provider value = {{tasks, setTasks }}>
        <BrowserRouter>
          <Header/>
          <div className="main">
            <Routes>
              <Route  path="/" element={<Home/>} />
              <Route  path="/help" element={<Help/>} >
                <Route  path="introduction" element={<Help_Introduction/>} />
                <Route  path="add" element={<Help_Add_Task/>} />
                <Route  path="remove" element={<Help_Remove_Task/>} />
              </Route>
              <Route path="*" element={<Home/>}/>  
              <Route  path="/add" element={<AddTask2/>} />    
            </Routes>
          </div>
        </BrowserRouter>
      </AppContext.Provider>
    </div>
  );
}

export default App;
