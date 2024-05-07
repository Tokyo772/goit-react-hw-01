import css from "../FriendList.module.css";
import clsx from "clsx";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div>
      <img src={avatar} alt="Avatar" width="48" className={css.friendAvatar} />
      <p className={css.friendName}>{name}</p>
      <p
        className={clsx(css.friendStatus, {
          [css.red]: !isOnline,
          [css.green]: isOnline,
        })}
      >
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;
