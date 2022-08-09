import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  StatusBar,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TuiJian from './TuiJian';
import PuKe from './PuKe';

const Game = () => {
  const [isAct, setAct] = useState('tuijian');
  const NativeStack = createNativeStackNavigator();
  const Qita = () => {
    return (
      <View
        style={{
          flex: 1,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>未完待续</Text>
      </View>
    );
  };
  const Nav = () => {
    if (isAct == 'tuijian') {
      return <TuiJian />;
    } else if (isAct == 'puke') {
      return <PuKe />;
    } else {
      return <Qita />;
    }
  };
  return (
    <View
      style={{
        width: '100%',
        flex: 1,
        backgroundColor: 'white',
      }}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <View
        style={{
          backgroundColor: 'white',
          flexDirection: 'row',
          alignItems: 'center',
          paddingTop: 10,
          marginLeft: 20,
          marginRight: 20,
        }}>
        <Image source={require('./icons/icon7.png')} />
        <View style={{flex: 1, flexDirection: 'row-reverse'}}>
          <View
            style={{
              height: 32,
              width: 32,
              backgroundColor: 'rgb(245,244,249)',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 16,
              paddingLeft: 2,
            }}>
            <Ionicons
              name={'ios-chevron-down-circle-outline'}
              color={'#000'}
              size={24}
            />
          </View>
          <TextInput
            selectionColor={'rgb(160, 160, 160)'}
            placeholder="斗地主"
            inlineImageLeft="icon8"
            style={{
              backgroundColor: 'rgb(245,244,249)',
              height: 32,
              width: 140,
              fontSize: 12,
              borderRadius: 16,
              paddingTop: 0,
              paddingBottom: 0,
              color: 'rgb(160,160,160)',
              marginRight: 10,
            }}
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 6,
          height: 40,
          marginLeft: 16,
          marginRight: 16,
        }}>
        <Text
          style={isAct == 'tuijian' ? styles.activeText : styles.normalText}
          onPress={() => {
            setAct('tuijian');
          }}>
          推荐
        </Text>
        <Text
          style={isAct == 'puke' ? styles.activeText : styles.normalText}
          onPress={() => {
            setAct('puke');
          }}>
          扑克
        </Text>
        <Text
          style={isAct == 'majiang' ? styles.activeText : styles.normalText}
          onPress={() => {
            setAct('majiang');
          }}>
          麻将
        </Text>
        <Text
          style={isAct == 'huodong' ? styles.activeText : styles.normalText}
          onPress={() => {
            setAct('huodong');
          }}>
          活动中心
        </Text>
        <Text
          style={isAct == 'wangyou' ? styles.activeText : styles.normalText}
          onPress={() => {
            setAct('wangyou');
          }}>
          网游
        </Text>
        <Text
          style={isAct == 'xinyou' ? styles.activeText : styles.normalText}
          onPress={() => {
            setAct('xinyou');
          }}>
          新游专区
        </Text>
      </View>
      <Nav />
      {/* <NativeStack.Navigator
        initialRouteName="qita"
        screenOptions={{headerShown: false}}>
        <NativeStack.Screen name="tuijian" component={TuiJian} />
        <NativeStack.Screen name="puke" component={PuKe} />
        <NativeStack.Screen name="qita" component={Qita} />
      </NativeStack.Navigator> */}
    </View>
  );
};

export default Game;

const styles = StyleSheet.create({
  normalText: {
    marginLeft: 10,
    marginRight: 10,
    color: 'rgb(120,120,120)',
    fontSize: 14,
  },
  activeText: {
    marginLeft: 10,
    marginRight: 10,
    color: 'rgb(74,204,147)',
    fontSize: 18,
    fontWeight: '700',
    borderBottomWidth: 2,
    borderColor: 'rgb(74,204,147)',
  },
});
