import { Tasks } from "../Tasks/Tasks";
import "./Home.scss";

export const Home = () => {

  return (
    <div className="home">
        <div className="appBodyContainer">
          <Tasks/>
        </div>
    </div>
  );
}