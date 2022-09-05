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
