import "./App.css";

import Profile from "./Profile";
import userData from "./userData.json";
import FriendList from "./FriendList";
import friends from "./friends.json";

const App = () => {
  return (
    <>
      <div className="container">
        <Profile {...userData}></Profile>
        <FriendList friends={friends} />
      </div>
    </>
  );
};

export default App;
