import PropTypes from 'prop-types';
import { ListFriends } from './FriendsStyled';

import FriendListItem from './FriendListItem';
export default function FriendList({ friends }) {
  return (
    <ListFriends>
      {friends.map(friend => {
        return <FriendListItem friend={friend} key={friend.id} />;
      })}
    </ListFriends>
  );
}

FriendList.propTypes = {
  friends: PropTypes.array,
  friend: PropTypes.object,
};
