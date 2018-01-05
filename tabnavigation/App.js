/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
    Image,
  Text,
  View,
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
var Dimensions=require('Dimensions');
var Width=Dimensions.get('window').width;
export default class App extends Component<{}> {
    constructor(props){
        super(props);
        this.state = {
            selectedTab:'首页'
        }
    }
    shouye(){
      this.setState({
          selectedTab:'首页'
      })
    }
    guanzhu(){
        this.setState({
            selectedTab:'关注'
        })
    }
    wode(){
        this.setState({
            selectedTab:'我的'
        })
    }
  render() {
    return (
      <View style={styles.container}>
        <TabNavigator style={styles.TabNavigatorstyle}>
          <TabNavigator.Item
              title="首页"
              selected={this.state.selectedTab==='首页'}
              onPress={()=>this.shouye()}
              selectedTitleStyle={styles.selecttabstyle}
              renderIcon={() => <Image style={styles.icon} source={require('./img/zhuye.png')} />}
          >
            <View style={styles.shouyestyle}>
              <Text>这是首页</Text>
            </View>
          </TabNavigator.Item>
          <TabNavigator.Item
              title="关注"
              selected={this.state.selectedTab==='关注'}
              badgeText="3"
              onPress={()=>this.guanzhu()}
              selectedTitleStyle={styles.selecttabstyle}
              renderIcon={() => <Image style={styles.icon} source={require('./img/guanzhu.png')} />}
          >
            <View style={styles.guanzhustyle}>
              <Text>这是关注页</Text>
            </View>
          </TabNavigator.Item>
          <TabNavigator.Item
              title="我的"
              selected={this.state.selectedTab==='我的'}
              onPress={()=>this.wode()}
              selectedTitleStyle={styles.selecttabstyle}
              renderIcon={() => <Image style={styles.icon} source={require('./img/my.png')} />}
          >
            <View style={styles.mystyle}>
              <Text>这是个人设置页</Text>
            </View>
          </TabNavigator.Item>
        </TabNavigator>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
    TabNavigatorstyle:{
        width:Width,
    },
    icon:{
    width:25,
        height:25,
        resizeMode:'cover'
    },
    shouyestyle:{
        flex:1,
     backgroundColor:'red'
    },
    guanzhustyle:{
    flex:1,
    backgroundColor:'yellow'
    },
    mystyle:{
        flex:1,
    backgroundColor:'green'
    },
    selecttabstyle:{
    color:'red'
    }
});
