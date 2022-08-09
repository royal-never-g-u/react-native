import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  DeviceEventEmitter,
} from 'react-native';
import React, {useContext} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import picList from './picList';
import {ScrollView} from 'react-native-gesture-handler';
import WebView from 'react-native-webview';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Web = () => (
  <WebView
    style={{width: '100%', height: '100%'}}
    source={{
      uri: 'https://baidu.com',
    }}
  />
);

const Mine = ({navigation}) => {
  const MyList = () => {
    const list = [
      {url: 20, name: '在线客服'},
      {url: 21, name: '实名认证'},
      {url: 22, name: '账号安全'},
      {url: 23, name: '切换账号'},
      {url: 24, name: '隐私政策'},
    ];
    return list.map(item => {
      return (
        <View
          key={item.url}
          style={{
            flexDirection: 'row',
            width: '100%',
            height: 60,
            alignItems: 'center',
            paddingLeft: 20,
            paddingRight: 20,
          }}>
          <Image source={picList[item.url]} style={{marginRight: 20}} />
          <View
            style={{
              flexDirection: 'row',
              flex: 1,
              borderBottomWidth: 2,
              borderColor: 'rgb(244,244,244)',
              height: '100%',
              alignItems: 'center',
            }}>
            <Text style={{fontWeight: '600', color: 'black', fontSize: 18}}>
              {item.name}
            </Text>
            <View style={{flex: 1, flexDirection: 'row-reverse'}}>
              <Image source={require('./icons/icon40.png')} />
            </View>
          </View>
        </View>
      );
    });
  };
  return (
    <View style={{width: '100%', flex: 1, backgroundColor: 'white'}}>
      <ScrollView overScrollMode="never" showsVerticalScrollIndicator={false}>
        <View
          style={{
            marginTop: 40,
            paddingLeft: 20,
            paddingRight: 20,
            borderBottomWidth: 20,
            borderColor: 'rgb(244,244,244)',
          }}>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              marginLeft: 'auto',
              marginRight: 'auto',
              justifyContent: 'space-between',
              marginBottom: 20,
            }}>
            <View style={{}}>
              <View style={{flexDirection: 'row', marginBottom: 14}}>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 16,
                    fontWeight: '700',
                  }}>
                  玩家262009164{'  '}{' '}
                </Text>
                <LinearGradient
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  colors={['rgb(52,160,239)', 'rgb(112,194,254)']}
                  style={{
                    height: 18,
                    width: 60,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 2,
                    marginTop: 2,
                  }}>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 10,
                    }}>
                    获取改名卡
                  </Text>
                </LinearGradient>
              </View>

              <Text style={{color: 'rgb(160,160,160)', fontSize: 16}}>
                同城游序号：262009164{' >'}
              </Text>
            </View>
            <Image
              source={require('./icons/icon31.png')}
              style={{marginRight: 30}}
            />
          </View>
          <TouchableOpacity
            onPress={() => {
              //DeviceEventEmitter.emit('route');
              navigation.navigate('Web');
            }}>
            <Image
              source={require('./icons/icon32.png')}
              style={{width: '100%', height: 80}}
              resizeMode="stretch"
            />
          </TouchableOpacity>
          <View style={{width: '100%', height: 60, flexDirection: 'row'}}>
            <View
              style={{
                width: '25%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: 'black', fontSize: 16, fontWeight: '700'}}>
                0
              </Text>
              <Text style={{fontSize: 10}}>通宝</Text>
            </View>
            <View
              style={{
                width: '25%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: 'black', fontSize: 16, fontWeight: '700'}}>
                0
              </Text>
              <Text style={{fontSize: 10}}>礼券</Text>
            </View>
            <View
              style={{
                width: '25%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: 'black', fontSize: 16, fontWeight: '700'}}>
                0
              </Text>
              <Text style={{fontSize: 10}}>优惠券</Text>
            </View>
            <View
              style={{
                width: '25%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: 'black', fontSize: 16, fontWeight: '700'}}>
                0
              </Text>
              <Text style={{fontSize: 10}}>礼包</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            paddingLeft: 20,
            paddingRight: 20,
            paddingBottom: 40,
            borderBottomWidth: 10,
            borderColor: 'rgb(244,244,244)',
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Image
            source={require('./icons/icon33.png')}
            resizeMode="stretch"
            style={{width: '49%', marginRight: 10}}
          />
          <Image
            source={require('./icons/icon34.png')}
            resizeMode="stretch"
            style={{width: '49%'}}
          />
        </View>
        <MyList />
      </ScrollView>
    </View>
  );
};

const StackNav = createNativeStackNavigator();

const Last = () => {
  return (
    <StackNav.Navigator
      initialRouteName="Mine1"
      screenOptions={{headerShown: false}}>
      <StackNav.Screen name="Web" component={Web} />
      <StackNav.Screen name="Mine1" component={Mine} />
    </StackNav.Navigator>
  );
};

export default Last;

const styles = StyleSheet.create({});
