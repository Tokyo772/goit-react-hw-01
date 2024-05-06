import css from "./FriendList.module.css";
import clsx from "clsx";

const FriendList = ({ friends }) => {
  return (
    <>
      <ul className={css.friendList}>
        {friends.map(({ id, name, isOnline, avatar }) => {
          return (
            <li key={id} className={css.friendCard}>
              <img
                src={avatar}
                alt="Avatar"
                width="48"
                className={css.friendAvatar}
              />
              <p className={css.friendName}>{name}</p>
              <p
                className={clsx(css.friendStatus, {
                  [css.red]: !isOnline,
                  [css.green]: isOnline,
                })}
              >
                {isOnline ? "Online" : "Offline"}
              </p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default FriendList;
