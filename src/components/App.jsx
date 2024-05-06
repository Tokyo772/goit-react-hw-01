import "./App.css";

import Profile from "./Profile";
import userData from "./userData.json";
import FriendList from "./FriendList";
import friends from "./friends.json";

const App = () => {
  return (
    <>
      <Profile {...userData}></Profile>
      <FriendList friends={friends} />
    </>
  );
};

export default App;
