/**
 * @format
 */

import {AppRegistry, DeviceEventEmitter} from 'react-native';
import App from './App';
import App1 from './App1';
import Login from './login';
import MyGame from './myGame';
import {name as appName} from './app.json';
import React, {useEffect, useState} from 'react';
import 'react-native-gesture-handler';
import Orientation from 'react-native-orientation-locker';

const Index = () => {
  const [isLog, setLog] = useState(true);
  useEffect(() => {
    Orientation.lockToPortrait();
    DeviceEventEmitter.addListener('islog', events => {
      setLog(events);
    });
  });
  return isLog ? <Login /> : <MyGame />;
};

AppRegistry.registerComponent(appName, () => Index);
