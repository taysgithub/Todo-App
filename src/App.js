
import { useState, createContext } from "react";

import { Header } from "./components/Header/Header";
import { Tasks } from "./components/Tasks/Tasks";
import { Form } from "./components/Form/Form";
import { data } from "./Data";

// create and export an AppContext using createContext()
export const AppContext = createContext();

function App() {

  const [tasks, setTasks] = useState(data);

  return (
    <div className="App">
      {/* Serve the appcontext to make it accessible across the app */}
      <AppContext.Provider value = {{tasks, setTasks }}>
        {/* Set up structure using components */}
        <Header/>
        <Tasks/>
        <Form/>
      </AppContext.Provider>
    </div>
  );
}

export default App;
