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
    Image,
    TextInput,
    TouchableNativeFeedback,
} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
 var Dimensions=require('Dimensions');
     var inputwidth=Dimensions.get('window').width;
     var loginwidth=inputwidth-20;


export default class Login extends Component<{}> {
      that=this;
    constructor(props) {
        super(props);
        this.state = {
            flagfoot:true,
            username:'',
            password:'',
        }
    }

    render() {

        return (
            <View style={styles.container}>
               <Image  style={styles.headimg}
                       source={require('./img/icon.png')}
               />
                <TextInput style={styles.userinput}
                           ref="username"
                           underlineColorAndroid="transparent"
                            keyboardType={'numeric'}
                           onFocus={
                               ()=>this.statechange()
                           }
                           onSubmitEditing={
                               ()=>this.statechangetrue()
                           }
                           onChangeText={
                               (value)=>this.setState({
                                   username:value
                               })
                           }

                />
                <TextInput style={styles.pwdinput}
                           ref="pwdvalue"
                           underlineColorAndroid="transparent"
                           secureTextEntry={true}
                           onFocus={
                               ()=>this.statechange()
                           }
                           onSubmitEditing={
                               ()=>this.statechangetrue()
                           }
                           onChangeText={
                               (value)=>this.setState({
                                   password:value
                               })
                           }
                />
                <TouchableNativeFeedback
                    onPress={()=>this.getinputvalue()}
                >
                <View style={styles.loginbox} >
                    <Text style={styles.qqlogin}>登陆</Text>
                </View>
                </TouchableNativeFeedback>
                <View style={styles.registbox}>
                    <Text style={styles.unlogin}>{this.state.username}无法登陆</Text>
                    <Text style={styles.newuser}>{this.state.password}新用户</Text>
                </View>
                {this.state.flagfoot==true ? <View style={styles.footbox} ref="foot">
                    <Text style={styles.otherlogin}>其他方式登陆:</Text>
                    <Image style={styles.otherqq}  source={require('./img/icon3.png')}/>
                    <Image style={styles.weixin}   source={require('./img/icon7.png')}/>
                    <Image style={styles.xinlang}  source={require('./img/icon8.png')}/>
                  </View>:<View></View>}

            </View>
        );
    }
    statechange(){
            this.setState({
                flagfoot:false
            })
    };
    statechangetrue(){
        var that=this;
        setTimeout(function () {
            that.setState({
                flagfoot:true
            })
        },500)

    }
  getinputvalue(){
      var username=this.state.username;
      var pwd=this.state.password;
      alert('用户名是：'+username+'密码是：'+pwd)
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    headimg:{
        width:60,
        height:60,
        resizeMode:'stretch',
        marginTop:50,
        borderRadius:50,
    },
    userinput:{
        textAlign:'center',
        backgroundColor:'white',
        width:inputwidth,
        height:40,
        padding:0,
       marginTop:30
    },
    pwdinput:{
        textAlign:'center',
        backgroundColor:'white',
        width:inputwidth,
        height:40,
        padding:0,
        marginTop:1
    },
   loginbox:{
       backgroundColor:'#62b7ff',
       width:loginwidth,
       height:50,
       marginTop:35,
      justifyContent:'center',
       borderRadius:5

   },
    qqlogin:{
        textAlign:'center',
        color:'#dff8fe',

    },
    registbox:{
        flexDirection:'row',
        width:loginwidth,
        marginTop:25
    },
    unlogin:{
        color:'#62b7ff'
    },
    newuser:{
        color:'#62b7ff',
       position:'absolute',
        right:0,

    },
    footbox:{
        width:loginwidth,
        position:'absolute',
        bottom:20,
        flexDirection:'row',
        alignItems:'center'

    },
    otherlogin:{
        fontWeight:'bold',
        color:'black',
        fontSize:16
    },
    otherqq:{
        width:30,
        height:30,
        marginLeft:10,
        borderRadius:50
    },
    weixin:{
        width:30,
        height:30,
        marginLeft:10,
        borderRadius:50
    },
    xinlang:{
        width:30,
        height:30,
        marginLeft:10,
        borderRadius:50
    },
});
module.exports=Login;