import { Navigation } from 'react-native-navigation';
import { HOME_SCREEN } from './Screens';
import registerScreens from './registerScreens';

// Register all screens on launch
registerScreens();

export function startApp() {
  Navigation.setDefaultOptions({
    topBar: {
      background: {
        color: '#039893'
      },
      title: {
        color: 'white',
      },
      backButton: {
        title: '', // Remove previous screen name from back button
        color: 'white'
      },
      buttonColor: 'white',
    },
    statusBar: {
      style: 'light'
    },
    layout: {
      orientation: ['portrait']
    },
  });

  Navigation.setRoot({
    root: {
      stack: {
        children: [{
          component: {
            name: HOME_SCREEN,
            options: {
              topBar: {
                title: {
                  text: 'Teams'
                }
              },
              statusBar: {
                style: 'light'
              }
            }
          }
        }]
      }
    }
  });
}
