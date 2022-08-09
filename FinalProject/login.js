import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ImageBackground,
  Image,
  TouchableOpacity,
  ToastAndroid,
  Modal,
  ScrollView,
  TextInput,
  DeviceEventEmitter,
} from 'react-native';
import React, {useState} from 'react';
import img from './icons/icon2.png';

const Login = () => {
  const [visibel1, setVisible1] = useState(false);
  const [visibel2, setVisible2] = useState(false);
  const [visibel3, setVisible3] = useState(true);
  return (
    <View
      style={{
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#fff',
      }}>
      {visibel1 ? (
        <>
          <StatusBar
            backgroundColor="rgba(0,0,0,0.5)"
            barStyle="dark-content"
          />
          <Modal
            transparent={true}
            visible={true}
            style={{position: 'relative', zIndex: -1}}>
            <View
              style={{
                backgroundColor: 'rgba(0,0,0,0.5)',
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: -1,
                position: 'relative',
              }}>
              <View
                style={{
                  width: '50%',
                  height: '40%',
                  backgroundColor: 'rgb(237,237,237)',
                  borderRadius: 8,
                }}>
                <Text
                  style={{
                    color: '#000',
                    marginTop: 20,
                    marginBottom: 20,
                    marginLeft: 'auto',
                    marginRight: 'auto',
                  }}>
                  同城游服务条款和隐私政策
                </Text>
                <ScrollView
                  overScrollMode="never"
                  showsVerticalScrollIndicator={false}
                  style={{
                    height: 140,
                    width: '80%',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    fontSize: 10,
                  }}>
                  <Text
                    style={{
                      color: 'rgb(20,20,20)',
                      fontSize: 12,
                      fontWeight: '300',
                    }}>
                    截至2021年12月，我国手机网民规模达10.29亿。随着手机功能的不断扩充，与之相关的APP数量激增。然而，安装APP时需要阅读的“用户协议和隐私政策”却越来越冗长晦涩，给用户带来了极大的阅读负担。这些包含大量法律术语和技术名词的条款，隐含着某些剥夺用户正当权益的内容。
                    针对以上情况，中央网信办曾于2017年对一些开发者的隐私条款进行评审，并公布了其中10家企业的隐私条款评审结果，发现隐私条款中隐含着不少对用户不利的内容。中国消费者协会于2018年8月至10月对10类100款APP进行了个人信息收集与隐私政策测评，发现多达91款APP列出的权限存在涉嫌“越界”，即存在过度收集用户个人信息的问题。
                    复杂的隐私条款给用户权益带来了潜在的损害。很多开发者在隐私条款中把所有责任单方面归于用户，并免除自己的责任，在这种条款的束缚下，即使厂商收集了一些不该收集的隐私数据或者对数据采取分享等行为，用户也因为协议原因难以用法律武器保护自己。例如，有些隐私条款中包含着数据分享条款，这导致开发者将数据分享给一些做精准营销的第三方企业，使消费者会收到不胜其烦的营销短信轰炸。还有一些开发者利用这些条款过度收集用户信息，有的隐私条款中所明确的权限与APP功能需求并不匹配，而APP要求用户“一揽子”授权，这样一来，用户无法选择所需要的功能及其相应的隐私条款，只能被动地接受平台提供的格式条款。
                    治理上述情况，需要政府、平台、社会组织等通力合作，在法律政策规范、平台生态治理、技术手段等方面发力，更好地保护用户的合法权益。
                    我国现有的法律政策对APP的数据收集等有相应规定。2021年，网信办等4部委出台了《常见类型移动互联网应用程序必要个人信息范围规定》，明确了39类APP数据收集的具体范围，这为APP隐私条款中涉及数据收集的内容明确了边界。之后公布的《网络数据安全管理条例（征求意见稿）》，对隐私条款的修改等进行了规范，要求一般平台就隐私条款的修改进行不少于30个工作日的公示与征求意见，而大型平台的隐私条款修订则需要经过第三方评估，并报经主管部门同意。这些要求对APP的隐私条款规范起到了指导作用。而从平台生态的视角，有关规定要求各大应用市场应该承担对隐私保护的监管责任，建立起隐私协议示范条款，并对APP的隐私条款进行审核，从而使其更为规范、简明、易懂。此外，“增强式告知”制度的建立，要求开发者突出展示隐私条款中用户最关心的信息或者与用户利益最相关的内容，从而使用户快速了解到隐私条款的关键核心内容。
                    在对APP隐私条款进行规范过程中，可适当借鉴国外的经验，引入社会组织、利用技术手段保护用户合法权利。世界范围内，一些学术机构或者社会组织开始利用人工智能等技术，提取隐私政策的核心内容，形成摘要和流程图，从而使用户在较短时间内完成对隐私政策的准确理解，减少用户阅读隐私条款的负担。
                    总之，APP隐私条款过于复杂晦涩，会给用户带来隐私泄露、知情权和选择权被剥夺等潜在风险，需要通过政府、平台和社会各界共同努力，对其进行全面治理，以更好地保护用户权益
                  </Text>
                </ScrollView>
                <Text
                  style={{
                    marginTop: 10,
                    marginBottom: 20,
                    fontSize: 10,
                    marginLeft: 'auto',
                    marginRight: 'auto',
                  }}>
                  <Text style={{color: 'rgb(34,173,139)'}}>
                    《同城游服务条款》
                  </Text>
                  和<Text style={{color: 'rgb(34,173,139)'}}>《隐私政策》</Text>
                </Text>
                <View
                  style={{
                    width: '86%',
                    flexDirection: 'row',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    justifyContent: 'space-between',
                    marginBottom: 15,
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      setVisible1(false);
                    }}
                    style={{
                      width: 90,
                      height: 40,
                      borderRadius: 4,
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderColor: 'rgb(160,160,160)',
                      borderWidth: 1,
                    }}>
                    <Text style={{color: 'rgb(160,160,160)'}}>拒绝</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      setVisible1(false);
                    }}
                    style={{
                      width: 90,
                      height: 40,
                      borderRadius: 4,
                      backgroundColor:
                        'linear-gradient(to right,rgb(7,193,113),rgb(4,160,123))',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text style={{color: '#fff'}}>同意</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        </>
      ) : (
        <StatusBar backgroundColor="white" barStyle="dark-content" />
      )}
      {visibel2 ? (
        <>
          <StatusBar
            backgroundColor="rgba(0,0,0,0.5)"
            barStyle="dark-content"
          />
          <Modal transparent={true}>
            <View
              style={{
                backgroundColor: 'rgba(0,0,0,0.5)',
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: -1,
                position: 'relative',
              }}>
              <View
                style={{
                  width: '70%',
                  height: '40%',
                  backgroundColor: 'rgb(237,237,237)',
                  borderRadius: 8,
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    marginTop: 30,
                    marginBottom: 30,
                    fontWeight: '600',
                    color: 'black',
                    fontSize: 20,
                  }}>
                  我们即将向您申请以下权限
                </Text>
                <Text
                  style={{
                    fontWeight: '600',
                    color: 'black',
                    fontSize: 18,
                    alignSelf: 'flex-start',
                    marginLeft: 15,
                  }}>
                  设备的基本信息：
                </Text>
                <Text
                  style={{
                    color: 'rgb(160,160,160)',
                    fontSize: 18,
                    height: '46%',
                    marginLeft: 10,
                    marginRight: 10,
                  }}>
                  我们申请获取您的设备基础信息，以实现本机号码一键登陆功能。
                </Text>
                <View
                  style={{
                    backgroundColor:
                      'linear-gradient(to right,rgb(7,193,113),rgb(4,160,123))',
                    width: '100%',
                    justifyContent: 'center',
                    flexDirection: 'row',
                    color: '#fff',
                    borderBottomLeftRadius: 8,
                    borderBottomRightRadius: 8,
                    flex: 1,
                    alignItems: 'center',
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      setVisible2(false);
                    }}
                    style={{
                      width: 90,
                      height: 40,
                      borderRadius: 4,
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderColor: '#fff',
                      borderWidth: 1,
                      marginRight: 20,
                    }}>
                    <Text style={{color: '#fff', fontSize: 16}}>拒绝</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      setVisible2(false);
                      setVisible3(false);
                    }}
                    style={{
                      width: 90,
                      height: 40,
                      borderRadius: 4,
                      backgroundColor:
                        'linear-gradient(to right,rgb(7,193,113),rgb(4,160,123))',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderColor: '#fff',
                      borderWidth: 1,
                    }}>
                    <Text style={{color: '#fff', fontSize: 16}}>同意</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        </>
      ) : (
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      )}
      {/* <ImageBackground source={img} style={{flex: '1'}} /> */}
      {visibel3 ? (
        <>
          <Image
            source={img}
            resizeMode="stretch"
            style={{width: '100%', height: 272}}
          />
          <Image
            source={require('./icons/icon1.png')}
            style={{width: 90, height: 90, top: -208, left: -3}}
          />
          <TouchableOpacity
            onPress={() => {
              // alert('111');
              ToastAndroid.show('找不到本机号码', ToastAndroid.SHORT);
            }}
            style={{
              width: '80%',
              height: 50,
              backgroundColor:
                'linear-gradient(to right,rgb(7,193,113),rgb(4,160,123))',
              marginTop: -91,
              borderRadius: 25,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: '#fff', fontSize: 18}}>
              授权本机号码 一键登陆
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setVisible2(true);
            }}
            style={{
              width: 'auto',
              height: 60,
              backgroundColor: 'transparent',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: 'rgb(101,104,107)', fontSize: 18}}>
              验证码登陆
            </Text>
          </TouchableOpacity>
          <View
            style={{
              width: '80%',
              height: 50,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}>
            <Image
              source={require('./icons/icon3.png')}
              style={{marginRight: 20}}
            />
            <View
              style={{
                width: '90%',
                display: 'flex',
                flexWrap: 'wrap',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
              }}>
              <Text
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  color: 'rgb(200,200,200)',
                }}>
                我已详细阅读并同意
                <Text
                  style={{color: 'rgb(34,173,139)'}}
                  onPress={() => {
                    setVisible1(true);
                  }}>
                  《账号认证服务条款》、《同城游服务条款》、《隐私条款》
                </Text>
              </Text>
            </View>
          </View>
        </>
      ) : (
        <>
          <View
            style={{
              flex: 1,
              width: '80%',
            }}>
            <Text
              style={{
                color: '#000',
                fontWeight: '700',
                fontSize: 16,
                marginTop: 40,
                marginBottom: 100,
              }}>
              登录
            </Text>
            <Text style={{color: 'rgb(160, 160, 160)', marginBottom: 40}}>
              未注册手机号验证后将自动注册
            </Text>
            <TextInput
              placeholder="请输入手机号"
              selectionColor={'rgb(160, 160, 160)'}
              style={{
                borderColor: 'rgb(160,160,160)',
                borderBottomWidth: 1,
                padding: 0,
                paddingBottom: 8,
                fontSize: 18,
                color: 'rgb(160,160,160)',
                marginBottom: 40,
              }}
            />
            <TouchableOpacity
              onPress={() => {
                DeviceEventEmitter.emit('islog', false);
              }}
              style={{
                width: '100%',
                height: 40,
                backgroundColor:
                  'linear-gradient(to right,rgb(7,193,113),rgb(4,160,123))',
                borderRadius: 20,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 100,
              }}>
              <Text style={{color: '#fff', fontSize: 16}}>
                下一步，获取验证码
              </Text>
            </TouchableOpacity>
            <View
              style={{
                width: '100%',
                height: 50,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                paddingLeft: 'auto',
                paddingRight: 'auto',
              }}>
              <Image
                source={require('./icons/icon3.png')}
                style={{marginRight: 10}}
              />
              <View
                style={{
                  display: 'flex',
                  flexWrap: 'nowrap',
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                }}>
                <Text
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    color: 'rgb(160,160,160)',
                    fontSize: 12,
                  }}>
                  我已详细阅读并同意
                  <Text
                    style={{color: 'rgb(34,173,139)'}}
                    onPress={() => {
                      setVisible1(true);
                    }}>
                    《同城游服务条款》
                  </Text>
                  和
                  <Text
                    style={{color: 'rgb(34,173,139)'}}
                    onPress={() => {
                      setVisible1(true);
                    }}>
                    《隐私政策》
                  </Text>
                </Text>
              </View>
            </View>
          </View>
        </>
      )}
      <View
        style={{
          flex: 1,
          width: '100%',
          display: 'flex',
          flexDirection: 'column-reverse',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}>
        <View>
          <Text style={{color: 'rgb(200,200,200)', marginBottom: 60}}>
            抵制不良游戏 拒绝盗版游戏 注意自我保护 谨防受骗上当
            {'\n'}
            适度游戏益脑 沉迷游戏伤身 合理安排时间 享受健康生活
          </Text>
        </View>
        <View>
          <Text style={{color: 'rgb(34,173,139)', marginBottom: 20}}>
            有疑问？ 找客服
          </Text>
        </View>
        <View
          style={{
            marginBottom: 14,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '80%',
          }}>
          <View style={{alignItems: 'center'}}>
            <Image source={require('./icons/icon4.png')} />
            <Text style={{color: 'rgb(200,200,200)', fontWeight: 'bold'}}>
              账号登陆
            </Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Image source={require('./icons/icon5.png')} />
            <Text style={{color: 'rgb(200,200,200)', fontWeight: 'bold'}}>
              微信登陆
            </Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Image source={require('./icons/icon6.png')} />
            <Text style={{color: 'rgb(200,200,200)', fontWeight: 'bold'}}>
              QQ登陆
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
