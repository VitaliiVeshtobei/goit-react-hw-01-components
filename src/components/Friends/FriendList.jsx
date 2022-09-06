import PropTypes from 'prop-types';

import FriendListItem from './FriendListItem';
export default function FriendList({ friends }) {
  return (
    <ul class="friend-list">
      {friends.map(friend => {
        return <FriendListItem friend={friend} key={friend.id} />;
      })}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.array,
  friend: PropTypes.object,
};
