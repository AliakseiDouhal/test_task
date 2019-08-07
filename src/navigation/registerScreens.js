import React from 'react';
import { Navigation } from 'react-native-navigation';
import {
  HomeScreen,
  TeamPage,
} from 'src/screens';
import { Provider } from 'src/redux';

import {
  HOME_SCREEN,
  TEAMPAGE_SCREEN,
} from './Screens';

function WrappedComponent(Component) {
  return function inject(props) {
    const EnhancedComponent = () => (
      <Provider>
        <Component
          {...props}
        />
      </Provider>
    );

    return <EnhancedComponent />;
  };
}

export default function () {
  Navigation.registerComponent(HOME_SCREEN, () => WrappedComponent(HomeScreen));
  Navigation.registerComponent(TEAMPAGE_SCREEN, () => WrappedComponent(TeamPage));
}
