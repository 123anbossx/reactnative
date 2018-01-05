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
    ListView,
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
var Dimensions=require('Dimensions');
var Width=Dimensions.get('window').width;
var Windata=require('./Wine.json');
export default class App extends Component<{}> {
    constructor(props) {
      var ds=new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2});
        super(props);
        this.state = {
          dataSource:ds.cloneWithRows(Windata)
        };
    }
        render() {
    return (
     <ListView

         dataSource={this.state.dataSource}
         renderRow={(rowData, sectionID, rowID, highlightRow)=>this.renderRow(rowData, sectionID, rowID, highlightRow)}
         // 当页面滚动到指定像素的时候调用回掉函数
         onEndReached={()=>this.scrollcompiete()}
         // 设置指定的像素
         onEndReachedThreshold={100}
     />
    )
  }
    scrollcompiete(){
        alert('滚动到底部了')
    }
  renderRow(rowData, sectionID, rowID, highlightRow){
      return(
          <View keys={rowID} style={styles.container}>
             <Image style={styles.imgstyle}source={{uri:Windata[rowID].image}}/>
              <View style={styles.textcontain}>
                  <Text style={styles.textstyle}>{Windata[rowID].name}</Text>
                  <Text style={styles.moneystyle}>￥{Windata[rowID].money}</Text>
              </View>
          </View>
          )

  }
}

const styles = StyleSheet.create({
 container:{
   flexDirection:'row',
   backgroundColor:'#ffffff',
     borderStyle:'solid',
     borderBottomColor:'#f3f0f3',
     borderBottomWidth:1,
 },
    imgstyle:{
   marginTop:10,
     height:70,
     width:70,
        resizeMode:'cover',
      marginBottom:10,
 },
    textstyle:{
         width:Width-90,
        color:'#363337',

    },
    textcontain:{
        marginTop:10,
        marginBottom:10,
        marginLeft:10,
    },
    moneystyle:{
        color:'#ff4f59',
    }
});
