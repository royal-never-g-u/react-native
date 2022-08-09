import {DeviceEventEmitter, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, createContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Game from './Game';
import MyText from './MyText';
import Mine from './Mine';
import Ionicons from 'react-native-vector-icons/Ionicons';
import WebView from 'react-native-webview';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Web = () => (
  <WebView
    style={{width: '100%', height: '100%'}}
    source={{
      uri: 'https://baidu.com',
    }}
  />
);

const MyGame = ({navigation}) => {
  useEffect(() => {
    DeviceEventEmitter.addListener('route', () => {
      navigation.navigate('Web');
    });
  });
  const change = () => {
    navigation.navigate('Web');
  };
  const myContext = createContext(change);
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarStyle: {
          paddingBottom: 20,
          height: 70,
        },
        tabBarLabelStyle: {color: 'rgb(34,173,139)'},
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Game') {
            iconName = focused
              ? 'ios-game-controller'
              : 'ios-game-controller-outline';
          } else if (route.name === 'MyText') {
            iconName = focused
              ? 'ios-chatbox-ellipses'
              : 'ios-chatbox-ellipses-outline';
          } else if (route.name === 'Mine') {
            iconName = focused ? 'ios-person' : 'ios-person-outline';
          }

          // You can return any component that you like here!
          return (
            <Ionicons name={iconName} size={size} color={'rgb(74,204,147)'} />
          );
        },
      })}>
      <Tab.Screen
        name="Game"
        component={Game}
        options={{
          headerShown: false,
          title: '游戏',
        }}
      />
      <Tab.Screen
        name="MyText"
        component={MyText}
        options={{
          title: '消息',
          headerShadowVisible: false,
        }}
      />
      <Tab.Screen
        name="Mine"
        component={Mine}
        options={{
          title: '我',
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

const Last = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MyGame">
        <Stack.Screen
          name="Web"
          component={Web}
          options={{title: '百度一下'}}
        />
        <Stack.Screen
          name="MyGame"
          component={MyGame}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Last;

const styles = StyleSheet.create({});
