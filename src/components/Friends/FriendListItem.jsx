import PropTypes from 'prop-types';
import { ListFriendsItem, SpanFriend } from './FriendsStyled';

export default function FriendListItem({ friend }) {
  const { isOnline, name, avatar } = friend;
  return (
    <ListFriendsItem>
      <SpanFriend isOnlineStatus={isOnline}></SpanFriend>
      <img src={avatar} alt={name} width="48" />
      <p>{name}</p>
    </ListFriendsItem>
  );
}

FriendListItem.propTypes = {
  isOnline: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
};
