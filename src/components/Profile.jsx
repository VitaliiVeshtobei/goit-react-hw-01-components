import PropTypes from 'prop-types';
import Box from './Box';
// import styled from 'styled-components';
import { List } from './ListStyled';
import { TextName } from './ProfileStyled';
import { Text } from './ProfileStyled';
import { SpanText } from './ProfileStyled';
export default function Profile({ avatar, username, tag, location, stats }) {
  const { followers, views, likes } = stats;
  return (
    <Box bg="#f7f9fa" pt="20px" class="profile">
      <div class="description">
        <img src={avatar} alt={username} width={240} class="avatar" />
        <TextName class="name">{username}</TextName>
        <Text class="tag">{tag}</Text>
        <Text class="location">{location}</Text>
      </div>

      <List class="stats">
        <Box display="flex" justifyContent="space-evenly" alignContent="center">
          <li>
            <SpanText class="label">Followers</SpanText>
            <span class="quantity">{followers}</span>
          </li>
          <li>
            <SpanText class="label">Views</SpanText>
            <span class="quantity">{views}</span>
          </li>
          <li>
            <SpanText class="label">Likes</SpanText>
            <span class="quantity">{likes}</span>
          </li>
        </Box>
      </List>
    </Box>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};
