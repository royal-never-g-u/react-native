import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {View, Text, Button} from 'react-native';
import tabNav from './tabNav';

const HomeScreen = ({navigation, extraData}) => (
  <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <Text>Home Screen {extraData}</Text>
    <Button
      title="Go to Details"
      onPress={() => {
        navigation.navigate('Details', {
          itemId: 86,
          otherParam: 'anything you want here',
        });
      }}
    />
    <Button
      title="Go to tabNav"
      onPress={() => {
        navigation.navigate('tabNav');
      }}
    />
  </View>
);

const DetailsScreen = ({navigation, route}) => {
  const {itemId, otherParam} = route.params;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Button
        title="Go to Details... again"
        onPress={() =>
          navigation.push('Details', {
            itemId: Math.floor(Math.random() * 100),
          })
        }
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Change params"
        onPress={() =>
          navigation.setParams({itemId: Math.floor(Math.random() * 100)})
        }
      />
      <Button
        title="Update the title"
        onPress={() => navigation.setOptions({title: JSON.stringify(itemId)})}
      />
      {/* onPress={() => navigation.popToTop()} */}
    </View>
  );
};

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const name = 'Kira';
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          options={{
            title: 'My home',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitleAlign: 'center',
            headerRight: () => (
              <Button
                onPress={() => alert('This is a button!')}
                title="Info"
                color="#000"
              />
            ),
          }}>
          {props => <HomeScreen {...props} extraData={name} />}
        </Stack.Screen>
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          initialParams={{itemId: 42}}
          options={route => ({title: route.params?.name})}
        />
        <Stack.Screen
          name="tabNav"
          component={tabNav}
          options={{title: 'haha'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
