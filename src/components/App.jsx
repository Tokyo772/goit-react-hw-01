import "./App.css";
import Profile from "./Profile";
import userData from "../userData.json";

const App = () => {
  return (
    <>
      <Profile {...userData}></Profile>
    </>
  );
};

export default App;
