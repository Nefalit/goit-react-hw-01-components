import PropTypes from 'prop-types';

import FriendListItem from './FriendListItem';
import s from './friendList.module.css';

function FriendList({ items }) {
  const elements = items.map(item => (
    <FriendListItem key={item.id} {...item} />
  ));

  return <ul className={s.list}>{elements}</ul>;
}

export default FriendList;

FriendList.defaultProps = {
  items: [],
};

FriendList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
