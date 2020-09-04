/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { CounterContextProvider } from './counter/CounterContext_'


AppRegistry.registerComponent(appName, () => App);
