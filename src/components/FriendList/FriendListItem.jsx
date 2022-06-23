import PropTypes from 'prop-types';
import s from './friendList.module.css';

function FriendListItem({ avatar, name, isOnline }) {
  const userStatus = isOnline ? s.online : s.offline;
  return (
    <li className={s.item}>
      <span className={userStatus}></span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}

export default FriendListItem;

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}