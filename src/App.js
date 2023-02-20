import { Header } from "./components/Header/Header";
import { Tasks } from "./components/Tasks/Tasks";

function App() {
  return (
    <div className="App">
      {/* Set up structure using components */}
      <Header/>
      <Tasks/>
    </div>
  );
}

export default App;
