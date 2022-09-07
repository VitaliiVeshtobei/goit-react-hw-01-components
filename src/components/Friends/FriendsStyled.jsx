import styled from 'styled-components';

export const ListFriends = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  padding-top: 20px;
  padding-bottom: 40px;
  padding-left: 0px;

  border: 1px solid #a4abaa;

  margin: 0px;
`;

export const ListFriendsItem = styled.li`
  width: 100%;
  position: relative;
`;

export const SpanFriend = styled.span`
  position: absolute;
  width: 20%;
  height: 30px;
  left: 66px;
  bottom: -25px;
  background: ${props => {
    return props.isOnlineStatus ? 'green' : 'red';
  }};
  border-radius: 50px;
`;
