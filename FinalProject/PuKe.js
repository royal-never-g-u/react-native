import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import picList from './picList';

const PuKe = () => {
  const MainList = () => {
    const list = [
      {
        url: 13,
        name: '千变双扣',
        people: 25,
        size: 67.51,
        text: '千变双扣强势上线，高能预警！',
      },
      {
        url: 14,
        name: '跑得快关牌',
        people: 2.8,
        size: 40.63,
        text: '跑得快趣味性十足，关牌竞技性更强',
      },
      {
        url: 15,
        name: '双扣-经典/千变/火拼多种玩法',
        people: 22,
        size: 67.51,
        text: '火拼，千变双重玩法！',
      },
      {
        url: 16,
        name: '原子',
        people: 2.2,
        size: 15.9,
        text: '享受炸弹满天飞的快感！',
      },
      {
        url: 17,
        name: '红五三副',
        people: 2.2,
        size: 8.29,
        text: '正统仙居规则，趣味红五游戏',
      },
      {
        url: 18,
        name: '温岭六家统',
        people: 1.9,
        size: 10.88,
        text: '3V3对战的纸牌游戏',
      },
      {
        url: 19,
        name: '温岭对家统',
        people: 2.0,
        size: 13.99,
        text: '温岭最好玩的气派游戏',
      },
    ];
    return list.map(item => {
      return (
        <View
          key={item.url}
          style={{
            flexDirection: 'row',
            paddingBottom: 10,
            width: '90%',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: 10,
            marginBottom: 10,
          }}>
          <Image
            source={picList[item.url]}
            style={{width: 64, height: 64, marginRight: 10}}
          />
          <View style={{justifyContent: 'space-between'}}>
            <Text style={{color: 'black', fontSize: 16, marginBottom: 2}}>
              {item.name}
            </Text>
            <Text style={{fontSize: 12, color: 'rgb(253,111,54)'}}>
              {item.people}万人{' '}
              <Text style={{color: 'rgb(160,160,160)'}}>
                在玩{'  '}
                {item.size}M
              </Text>
            </Text>
            <Text style={{fontSize: 14, color: 'rgb(140,140,140)'}}>
              {item.text}
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
      );
    });
  };
  return (
    <ScrollView
      overScrollMode="never"
      showsVerticalScrollIndicator={false}
      style={{paddingTop: 10}}>
      <MainList />
    </ScrollView>
  );
};

export default PuKe;

const styles = StyleSheet.create({});
