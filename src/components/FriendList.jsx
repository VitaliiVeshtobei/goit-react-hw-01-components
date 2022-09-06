import PropTypes from 'prop-types';
import { List } from './ListStyled';

import FriendListItem from './FriendListItem';
export default function FriendList({ friends }) {
  return (
    <List class="friend-list">
      {friends.map(friend => {
        return <FriendListItem friend={friend} key={friend.id} />;
      })}
    </List>
  );
}

FriendList.propTypes = {
  friends: PropTypes.array,
  friend: PropTypes.object,
};
