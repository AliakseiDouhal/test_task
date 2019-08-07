import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import {
  Content, Card, CardItem, Text,
} from 'native-base';
import moment from 'moment';

const styles = StyleSheet.create({
  matchWrapper: {
    flex: 1,
  },
  competitonName: {
    textAlign: 'center',
    paddingBottom: 7,
  },
  matchRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  matchHeader: {
    flexDirection: 'row',
    position: 'relative',
    justifyContent: 'center',
  },
  matchDate: {
    position: 'absolute',
    top: 2,
    left: 0,
    fontSize: 10
  },
  homeTeam: {
    flex: 1,
    textAlign: 'right'
  },
  awayTeam: {
    flex: 1,
  },
});

const Fixtures = (props) => {
  return (
    <Content>
      {props.matches.map(match => (
        <Card key={match.id}>
          <CardItem>
            <View style={styles.matchWrapper}>
              <View style={styles.matchHeader}>
                <Text style={styles.competitonName}>
                  {match.competition.name}
                </Text>
                <Text style={styles.matchDate}>
                  {moment.utc(match.utcDate).local().format('MMM,DD HH:mm')}
                </Text>
              </View>
              <View style={styles.matchRow}>
                <Text style={styles.homeTeam}>{match.homeTeam.name}</Text>
                <Text> : </Text>
                <Text style={styles.awayTeam}>{match.awayTeam.name}</Text>
              </View>
            </View>
          </CardItem>
        </Card>
      ))}
    </Content>
  );
};

Fixtures.propTypes = {
  matches: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    competition: PropTypes.object.isRequired,
    utcDate: PropTypes.string.isRequired,
    homeTeam: PropTypes.object.isRequired,
    awayTeam: PropTypes.object.isRequired,
  })).isRequired,
};

export default Fixtures;
