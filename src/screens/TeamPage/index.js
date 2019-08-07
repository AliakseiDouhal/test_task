import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Tab, Tabs, Spinner } from 'native-base';
import { connect } from 'react-redux';
import { fetchTeamDetails } from '../../redux/modules/teamInfo';
import Squad from './components/Squad';
import Fixtures from './components/Fixtures';
import TeamHeader from './components/TeamHeader';

class TeamPage extends Component {
  componentDidMount() {
    this.props.fetchTeamDetails(this.props.id);
  }

  render() {
    const { isLoading, players } = this.props;
    return (
      <Fragment>
        <TeamHeader />
        {!isLoading ?
          <Tabs>
            <Tab heading="Players">
              <Squad players={players} />
            </Tab>
            <Tab heading="Fixtures">
              <Fixtures matches={this.props.teamFixtures} />
            </Tab>
          </Tabs> :
          <View style={{ flex: 0.8, justifyContent: 'center' }}>
            <Spinner />
          </View>
        }
      </Fragment>

    );
  }
}

TeamPage.propTypes = {
  fetchTeamDetails: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  isLoading: PropTypes.bool.isRequired,
  teamFixtures: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    competition: PropTypes.object.isRequired,
    utcDate: PropTypes.string.isRequired,
    homeTeam: PropTypes.object.isRequired,
    awayTeam: PropTypes.object.isRequired,
  })).isRequired,
  players: PropTypes.shape({
    Goalkeepers: PropTypes.array.isRequired,
    Defenders: PropTypes.array.isRequired,
    Midfielders: PropTypes.array.isRequired,
    Attackers: PropTypes.array.isRequired,
  }).isRequired,
};

const mapStateToProps = ({
  teamInfo: { players, isLoading, teamFixtures },
}) => ({
  players,
  isLoading,
  teamFixtures,
});

const mapDispatchToProps = {
  fetchTeamDetails,
};

export default connect(mapStateToProps, mapDispatchToProps)(TeamPage);
