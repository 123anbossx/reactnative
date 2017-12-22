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
    ScrollView,
    Dimensions,
    FlatList,
    TextInput,
    Image,
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
var contaiinerwidth=Dimensions.get('window').width;
var Imgdata=require('./ImageData.json');
var TimerMixin = require('react-timer-mixin');
export default class App extends Component<{}> {
    constructor(props) {
        super(props);
        this.state = {
            // 表示初始的要变色的圆点id
         listid:'0'
        };
    }
    componentDidMount() {
        // 开启定时器
       this.starttimer();
    }
    //定时器
    starttimer(){
        var scrollView=this.refs.scrollview;

      var _this=this;
      var timer=setInterval(function () {

         var current=0;
         if((_this.state.listid+1)>=Imgdata.data.length){
           current=0;
         }else {
           current=parseInt(_this.state.listid)+1;
         }
         _this.setState({
             listid:current
         });
         // 获取将要展示的图片的id
          var offsetid=_this.state.listid;
            // 图片偏移量等于图片的id*屏幕的宽度
          var offsetX=offsetid*contaiinerwidth;
          scrollView.scrollTo({x: offsetX, y: 0, animated: true});
      },1000)
    }
    mixins: [TimerMixin];
  render() {
    return (
        <View>
          <ScrollView
              ref="scrollview"
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              pagingEnabled={true}
              // 当图片动画执行一个针之后要执行的函数
              onMomentumScrollEnd={(e)=>this.changelistid(e)}
          >
              {/*添加图片的函数*/}
              {this.Addimg()}
          </ScrollView>
          <View style={styles.listcontainer}>
              {/*添加下面圆点的函数*/}
              {this.Addlist()}
          </View>
        </View>
    );
  }
  Addimg(){
    var addelement=[];
      for(var i=0;i<Imgdata.data.length;i++){
        addelement.push(
            <Image key={1} source={{uri:Imgdata.data[i].img}} style={{width:contaiinerwidth,height:124,}}/>
        )
      }
      return addelement;
  }
  Addlist(){
    var listarry=[];
    for(var i=0;i<Imgdata.data.length;i++){
        (i==this.state.listid)? listarry.push(
            <View key={i}style={styles.liststyleone}></View>
        ):listarry.push(
            <View key={i}style={styles.liststyletwo}></View>
        )

    }
    return listarry
  }
changelistid(e){
      // 获取当前图片的偏移量
       var offsetx=e.nativeEvent.contentOffset.x;
       var listid=offsetx/contaiinerwidth;
       this.setState({
           listid:listid
       })
}
}
const styles = StyleSheet.create({
      listcontainer:{
         flexDirection:'row',
          width:contaiinerwidth,
          height:30,
          backgroundColor:'rgba(102,99,89,0.4)',
         alignItems:'center',
          position:'absolute',
          bottom:0
      },
      liststyleone:{
       marginLeft:10,
        height:10,
          width:10,
          borderRadius:50,
          backgroundColor:'#f69c00'
      },
    liststyletwo:{

        marginLeft:10,
        height:10,
        width:10,
        borderRadius:50,
        backgroundColor:'#fffbf7'
    }
});
