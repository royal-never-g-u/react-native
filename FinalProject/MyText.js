import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  DeviceEventEmitter,
  TextInput,
  RefreshControl,
  ToastAndroid,
  Animated,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useFocusEffect} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ScrollView} from 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();

const Little = () => {
  const list = [
    {id: 1, name: '账号问题'},
    {id: 2, name: '游戏充值'},
    {id: 3, name: '服务器问题'},
    {id: 4, name: '下载问题'},
  ];
  return list.map(item => {
    return (
      <View
        key={item.id}
        style={{
          width: '100%',
          height: 34,
          flexDirection: 'row',
          backgroundColor: 'white',
          alignItems: 'center',
          paddingLeft: 10,
          paddingRight: 10,
          borderBottomWidth: 2,
          borderColor: 'rgb(244,244,244)',
        }}>
        <Image
          source={require('./icons/icon44.png')}
          style={{width: 20, height: 20, top: 1, marginRight: 10}}
          resizeMode="stretch"
        />
        <Text style={{color: 'black', fontSize: 13}}>{item.name}</Text>
        <View
          style={{flex: 1, flexDirection: 'row-reverse', alignItems: 'center'}}>
          <Image
            source={require('./icons/icon46.png')}
            resizeMode="center"
            style={{width: 20, height: 20}}
          />
        </View>
      </View>
    );
  });
};

const Home = ({navigation}) => {
  const myAnimate = new Animated.Value(0);
  useFocusEffect(() => {
    Animated.timing(myAnimate, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
      delay: 200,
    }).start();
    return () => {
      Animated.timing(myAnimate, {
        toValue: 0,
        duration: 0,
        useNativeDriver: true,
      }).start();
    };
  });
  return (
    <View
      style={{
        width: '100%',
        flex: 1,
        backgroundColor: 'white',
      }}>
      <Animated.View
        style={{
          width: '100%',
          flex: 1,
          backgroundColor: 'white',
          opacity: myAnimate,
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('KeFu');
            DeviceEventEmitter.emit('change', false);
          }}
          style={{
            paddingLeft: 20,
            paddingRight: 20,
            marginTop: 20,
            flexDirection: 'row',
          }}>
          <Image
            source={require('./icons/icon41.png')}
            resizeMode="stretch"
            style={{width: 50, height: 50, marginRight: 20}}
          />
          <View style={{flexDirection: 'row', flex: 1}}>
            <Text style={{color: 'black', fontWeight: '650', fontSize: 18}}>
              在线客服
            </Text>
            <View
              style={{
                flex: 1,
                flexDirection: 'row-reverse',
                alignItems: 'center',
              }}>
              <Image source={require('./icons/icon42.png')} />
            </View>
          </View>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const KeFu = () => {
  const myAnimate2 = new Animated.Value(0);
  const [fresh, setFresh] = useState(false);
  useFocusEffect(() => {
    DeviceEventEmitter.emit('change', false);
    Animated.timing(myAnimate2, {
      duration: 200,
      toValue: 1,
      useNativeDriver: true,
    }).start();
    return () => {
      Animated.timing(myAnimate2, {
        duration: 1,
        toValue: 0,
        useNativeDriver: true,
      }).start();
      DeviceEventEmitter.emit('change', true);
    };
  });
  const myFresh = () => {
    setFresh(true);
    setTimeout(() => {
      ToastAndroid.show('なにもない', ToastAndroid.SHORT);
      setFresh(false);
    }, 2000);
  };
  return (
    <Animated.View style={{width: '100%', flex: 1, opacity: myAnimate2}}>
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={fresh}
            onRefresh={myFresh}
            title="なにもない"
          />
        }>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 4,
          }}>
          <Ionicons
            name={'md-chevron-down-outline'}
            color={'rgb(160,160,160)'}
            size={12}
          />
          <Text style={{color: 'rgb(160,160,160)', fontSize: 10}}>
            下拉可查看历史记录
          </Text>
        </View>
        <View style={{paddingLeft: 10, paddingRight: 10, marginTop: 10}}>
          <Image
            source={require('./icons/icon43.png')}
            resizeMode="stretch"
            style={{width: '100%'}}
          />
          <Little />
          <View
            style={{marginTop: 24, flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={require('./icons/icon45.png')}
              resizeMode="stretch"
              style={{
                width: 40,
                height: 40,
                marginLeft: 10,
                marginRight: 20,
                top: 2,
              }}
            />
            <View
              style={{
                padding: 10,
                backgroundColor: 'white',
                paddingLeft: 15,
                paddingRight: 15,
                borderRadius: 10,
              }}>
              <Text style={{color: 'black', fontSize: 12}}>
                您好，请问有什么可以帮助您的呢？
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={{width: '100%', flex: 1, flexDirection: 'column-reverse'}}>
        <View
          style={{
            width: '100%',
            height: 40,
            backgroundColor: 'white',
            padding: 4,
            paddingLeft: 10,
            paddingRight: 10,
            flexDirection: 'row-reverse',
            alignItems: 'center',
          }}>
          <Ionicons
            name={'add-circle-outline'}
            color={'rgb(160,160,160)'}
            size={30}
            style={{marginLeft: 10}}
          />
          <TextInput
            selectionColor={'rgb(200, 200, 200)'}
            placeholder="输入问题"
            placeholderTextColor="rgb(200,200,200)"
            keyboardType="default"
            style={{
              backgroundColor: 'rgb(247,247,247)',
              flex: 1,
              color: 'rgb(100,100,100)',
              paddingTop: 0,
              paddingBottom: 0,
            }}
          />
        </View>
      </View>
    </Animated.View>
  );
};

const MyText = ({navigation}) => {
  useEffect(() => {
    DeviceEventEmitter.addListener('change', change => {
      navigation.setOptions({headerShown: change});
      if (change) {
        navigation.setOptions({tabBarStyle: {paddingBottom: 20, height: 70}});
      } else {
        navigation.setOptions({tabBarStyle: {display: 'none'}});
      }
    });
  });
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{animation: 'fade'}}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="KeFu"
        component={KeFu}
        options={{
          headerShadowVisible: false,
          title: '在线客服',
        }}
      />
    </Stack.Navigator>
  );
};

export default MyText;

const styles = StyleSheet.create({});
