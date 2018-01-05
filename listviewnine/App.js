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
  ListView,
  Image,
  TouchableOpacity,
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
var shardata=require('./shareData.json');
var Dimensions=require('Dimensions');
var Width=Dimensions.get('window').width;
var imgwidth=70;
var margindistance=(Width-imgwidth*3)/4;
export default class App extends Component<{}> {
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        this.state = {dataSource: ds.cloneWithRows( shardata.data),};
    }
        render() {
    return (
     <ListView
         contentContainerStyle={styles.liststyle}
         dataSource={this.state.dataSource}
         renderRow={(rowData, sectionID, rowID, highlightRow)=>this.renderRow(rowData, sectionID, rowID, highlightRow)}
     />
    );
  }
  renderRow(rowData, sectionID, rowID, highlightRow){
      return(
          < TouchableOpacity activeOpacity={0.5}onPress={()=>this.consoleha()}>
          <View style={styles.viewstyle}>
            <Image  style={styles.imgstyle}source={{uri:rowData.icon}}/>
            <Text style={styles.namestyle}>{rowData.title}</Text>

          </View>
          </TouchableOpacity>
      )
  }
   consoleha(){


   }
}
const styles = StyleSheet.create({
    liststyle:{
        marginTop:20,
        flexDirection:'row',
        flexWrap:'wrap',

    },
    viewstyle:{
        width:imgwidth,
        marginLeft:margindistance,
        alignItems:'center'
    },
    imgstyle:{
      
      width:imgwidth,
      height:imgwidth,
      resizeMode:'cover',
    },
    namestyle:{
        // width:imgwidth,
        // textAlign:'center',
        fontSize:13
    }
});
