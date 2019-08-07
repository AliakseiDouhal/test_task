import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import {
  Container, Content, List, Spinner,
} from 'native-base';
import { Navigation } from 'react-native-navigation';
import { TEAMPAGE_SCREEN } from 'src/navigation';
import { View } from 'react-native';
import { fetchTeams } from '../../redux/modules/teams';
import ListRow from './components/ListRow';

class HomeScreen extends PureComponent {

  async componentDidMount() {
    await this.props.fetchTeams();
    SplashScreen.hide();
  }

  onSelectTeam = (id, teamName) => {
    Navigation.push(this.props.componentId, {
      component: {
        name: TEAMPAGE_SCREEN,
        passProps: {
          id
        },
        options: {
          topBar: {
            title: {
              text: teamName
            }
          }
        }
      }
    });
  };

  render() {
    const { list, isLoading } = this.props;
    return (
      <Container>
        <Content>
          {!isLoading ?
            <List button>
              {list.map(team => (
                <ListRow
                  key={team.id}
                  id={team.id}
                  teamName={team.name}
                  onPress={this.onSelectTeam}
                />
              ))}
            </List> :
            <View>
              <Spinner />
            </View>
          }
        </Content>
      </Container>
    );
  }
}


HomeScreen.propTypes = {
  fetchTeams: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
};


const mapStateToProps = ({
  teams: { list, isLoading },
}) => ({
  isLoading,
  list,
});

const mapDispatchToProps = {
  fetchTeams,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
