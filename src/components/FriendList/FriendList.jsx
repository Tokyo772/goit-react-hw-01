import css from "./FriendList.module.css";

import FriendListItem from "./FriendListItem/FriendListItem";

const FriendList = ({ friends }) => {
  return (
    <>
      <ul className={css.friendList}>
        {friends.map(({ id, name, isOnline, avatar }) => {
          return (
            <li key={id} className={css.friendCard}>
              <FriendListItem name={name} avatar={avatar} isOnline={isOnline} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default FriendList;
