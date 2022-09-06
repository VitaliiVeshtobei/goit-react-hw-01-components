import PropTypes from 'prop-types';
import Box from '../App/Box';

import {
  TextName,
  ProfileList,
  Text,
  SpanLabel,
  SpanQuantity,
  ProfileDescript,
} from './Profile.Styled';

export default function Profile({ avatar, username, tag, location, stats }) {
  const { followers, views, likes } = stats;
  return (
    <Box bg="#f7f9fa">
      <ProfileDescript>
        <img src={avatar} alt={username} width={240} />
        <TextName>{username}</TextName>
        <Text>{tag}</Text>
        <Text>{location}</Text>
      </ProfileDescript>

      <ProfileList>
        <li>
          <SpanLabel>Followers</SpanLabel>
          <SpanQuantity>{followers}</SpanQuantity>
        </li>
        <li>
          <SpanLabel>Views</SpanLabel>
          <SpanQuantity>{views}</SpanQuantity>
        </li>
        <li>
          <SpanLabel>Likes</SpanLabel>
          <SpanQuantity>{likes}</SpanQuantity>
        </li>
      </ProfileList>
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
