import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import picList from './picList';

const TuiJian = () => {
  const For = () => {
    const list = [
      {url: 1, people: 60, name: '美女捕鱼'},
      {url: 2, people: 2.8, name: '跑得快关牌'},
      {url: 3, people: 67, name: '斗地主'},
      {url: 4, people: 2.2, name: '热血之刃2'},
      {url: 5, people: 2.3, name: '谁是首富'},
      {url: 6, people: 2.2, name: '金蟾捕鱼2'},
      {url: 7, people: 7.4, name: '四川麻将'},
      {url: 8, people: 1.3, name: '放置与召唤'},
    ];
    return list.map(item => {
      return (
        <View
          key={item.url}
          style={{
            width: '25%',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 10,
          }}>
          <Image source={picList[item.url]} style={{marginBottom: 5}} />
          <Text
            style={{fontSize: 12, color: 'rgb(253,111,54)', marginBottom: 2}}>
            {'' + item.people}万人
            <Text style={{fontSize: 10, color: 'rgb(160,160,160)'}}>在玩</Text>
          </Text>
          <Text style={{color: 'rgb(60,60,60)', fontSize: 12}}>
            {item.name}
          </Text>
        </View>
      );
    });
  };
  const ForList = () => {
    const list = [
      {
        url: 9,
        name: '卡卡保皇-塔防策略',
        people: 2.1,
        text: '一款益智策略塔防游戏，好玩轻松又享福利',
      },
      {
        url: 10,
        name: '女神联盟-魔幻契约',
        people: 2.2,
        text: '殿堂级IP“女神联盟”新作 《女神联盟：契约》',
      },
      {
        url: 11,
        name: '九天诛魔-纵横修仙',
        people: 1.9,
        text: '全新恢宏修仙制作！邀您上线体验！',
      },
      {
        url: 12,
        name: '冒险王3-全图吸怪',
        people: 2.2,
        text: '冒险传承竖版挂机休闲游戏',
      },
    ];
    return list.map(item => {
      return (
        <View
          key={item.url}
          style={{
            width: '96%',
            marginLeft: 'auto',
            marginRight: 'auto',
            flexDirection: 'row',
            marginBottom: 10,
          }}>
          <Image
            source={picList[item.url]}
            style={{width: 60, height: 60, marginRight: 10}}
          />
          <View style={{justifyContent: 'space-between'}}>
            <Text style={{color: 'black'}}>{item.name}</Text>
            <Text style={{fontSize: 12, color: 'rgb(253,111,54)'}}>
              {item.people + '万人 '}
              <Text style={{color: 'rgb(160,160,160)'}}>在玩</Text>
            </Text>
            <Text style={{fontSize: 12}}>{item.text}</Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row-reverse',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgb(248,183,28)',
                height: 30,
                width: 70,
                borderRadius: 15,
              }}>
              <Text style={{fontSize: 14, color: 'white'}}>开始玩</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    });
  };
  return (
    <ScrollView overScrollMode="never" showsVerticalScrollIndicator={false}>
      <View
        style={{
          width: '94%',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}>
        <Image
          style={{width: '100%', height: 180, marginBottom: 20}}
          source={require('./icons/icon9.png')}
          resizeMode="stretch"
        />
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['rgb(253,111,54)', 'rgb(244,147,22)']}
          style={{
            width: 70,
            justifyContent: 'center',
            alignItems: 'center',
            height: 30,
            borderTopRightRadius: 4,
            borderBottomRightRadius: 4,
          }}>
          <Text style={{fontWeight: '500', color: 'white'}}>本地热门</Text>
        </LinearGradient>
        <View
          style={{
            width: '96%',
            marginRight: 'auto',
            marginLeft: 'auto',
            marginTop: 12,
          }}>
          <View
            style={{
              flexDirection: 'row',
              borderBottomWidth: 0.4,
              paddingBottom: 10,
              borderColor: 'rgb(160,160,160)',
            }}>
            <Image
              source={require('./icons/icon10.png')}
              style={{width: 60, height: 60, marginRight: 10}}
            />
            <View style={{justifyContent: 'space-between'}}>
              <Text style={{color: 'black'}}>双扣-经典/千变/火拼多种玩法</Text>
              <Text style={{fontSize: 12, color: 'rgb(253,111,54)'}}>
                <Ionicons
                  name={'md-logo-firebase'}
                  size={12}
                  color={'rgb(253,111,54)'}
                />
                22.6万人在玩{'  '}67.51M
              </Text>
              <Text style={{fontSize: 12, color: 'rgb(160,160,160)'}}>
                火拼/千变双重玩法！
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row-reverse',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'rgb(34,173,139)',
                  height: 30,
                  width: 70,
                  borderRadius: 15,
                }}>
                <Text style={{fontSize: 14, color: 'white'}}>玩玩看</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flexWrap: 'wrap',
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginLeft: 'auto',
              marginRight: 'auto',
              width: '100%',
              marginTop: 15,
            }}>
            <For />
          </View>
        </View>
        <Image
          style={{width: '100%', height: 180, marginBottom: 20}}
          source={require('./icons/icon19.png')}
          resizeMode="stretch"
        />
        <ForList />
      </View>
    </ScrollView>
  );
};

export default TuiJian;

const styles = StyleSheet.create({});
