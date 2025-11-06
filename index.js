/**
 * @format
 */

import { AppRegistry } from 'react-native';
// Use the src/App entry which sets up navigation and app providers
import App from './src/App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
