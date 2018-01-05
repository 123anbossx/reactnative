/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ToolbarAndroid,
  Switch,
} from 'react-native';

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
    super(props)
     this.state={
      flag:false
     }
  }
    onActionSelected(index){
      if(index==0){
          alert('这是第一个')
      }
      if(index==1){
        alert('这是第二个');
      }

    };
    onValueChange(){
        var flag=this.state.flag;
      this.setState({
          flag:!flag
      })
    }
  render() {
    return (
      <View style={styles.container}>
        <ToolbarAndroid
            style={styles.toolbarstyle}
            contentInsetStart={15}
            contentInsetEnd={30}
            onActionSelected={(index)=>this.onActionSelected(index)}
            title="工具栏标题"
            subtitle="这是子标题"

            titleColor="red"
            actions={[{title:'首页',icon:require('./img/love.png'),show:'always',showWithText:true},{title:'关注',icon:require('./img/video.jpg'),show:'always',showWithText:true}]}

        />
        <Switch
            value={this.state.flag}
            onValueChange={()=>this.onValueChange()}
        />
      <ToolbarAndroid/>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
  },
    toolbarstyle:{
        width:Width,
        height:50,
        backgroundColor:'green',
        marginBottom:0
    }
});
