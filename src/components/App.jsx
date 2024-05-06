import "./App.css";

import Profile from "./Profile";
import userData from "./userData.json";

import FriendList from "./FriendList";
import friends from "./friends.json";

import TransactionHistory from "./TransactionHistory";
import transactions from "./transactions.json";

const App = () => {
  return (
    <>
      <div className="container">
        <Profile {...userData}></Profile>
        <FriendList friends={friends} />
        <TransactionHistory items={transactions} />
      </div>
    </>
  );
};

export default App;
