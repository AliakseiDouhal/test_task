import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, Content, Separator, Text,
} from 'native-base';
import Player from './components/Player';

const Squad = ({ players }) => {
  return (
    <Container>
      <Content>
        <Separator bordered>
          <Text>Goalkeepers</Text>
        </Separator>
        {players.Goalkeepers.map((player, i) => (
          <Player
            last={players.Goalkeepers.length - 1 === i}
            key={player.id}
            player={player}
          />
        ))}
        <Separator bordered>
          <Text>Defenders</Text>
        </Separator>
        {players.Defenders.map((player, i) => (
          <Player
            last={players.Defenders.length - 1 === i}
            key={player.id}
            player={player}
          />
        ))}
        <Separator bordered>
          <Text>Midfielders</Text>
        </Separator>
        {players.Midfielders.map((player, i) => (
          <Player
            last={players.Midfielders.length - 1 === i}
            key={player.id}
            player={player}
          />
        ))}
        <Separator bordered>
          <Text>Attackers</Text>
        </Separator>
        {players.Attackers.map((player, i) => (
          <Player
            last={players.Attackers.length - 1 === i}
            key={player.id}
            player={player}
          />
        ))}
      </Content>
    </Container>
  );
};

Squad.propTypes = {
  players: PropTypes.shape({
    Goalkeepers: PropTypes.array.isRequired,
    Defenders: PropTypes.array.isRequired,
    Midfielders: PropTypes.array.isRequired,
    Attackers: PropTypes.array.isRequired,
  }).isRequired,
};

export default Squad;
