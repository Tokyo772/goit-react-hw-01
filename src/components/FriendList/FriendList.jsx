import css from "./FriendList.module.css";
import clsx from "clsx";
import FriendListItem from "./FriendListItem";

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
