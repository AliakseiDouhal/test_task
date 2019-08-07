import React from 'react';
import PropTypes from 'prop-types';
import {
  Icon, Left, ListItem, Right, Text,
} from 'native-base';

const ListRow = (props) => {
  return (
    <ListItem onPress={() => props.onPress(props.id, props.teamName)}>
      <Left>
        <Text>{props.teamName}</Text>
      </Left>
      <Right>
        <Icon name="arrow-forward" />
      </Right>
    </ListItem>
  );
};

ListRow.propTypes = {
  onPress: PropTypes.func.isRequired,
  teamName: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default ListRow;
