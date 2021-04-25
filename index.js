/**
 * @format
 */
import { name as appName } from './app.json';
import { AppRegistry } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { AppStackNavigator } from './src/utils/AppNavigator';

const App = createAppContainer(AppStackNavigator);
AppRegistry.registerComponent(appName, () => App);
