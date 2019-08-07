import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, Text } from 'native-base';

const Player = (props) => {
  const { player, last } = props;
  return (
    <ListItem last={last}>
      <Text>{player.name}</Text>
    </ListItem>
  );
};

Player.propTypes = {
  player: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  last: PropTypes.bool.isRequired,
};

export default Player;
