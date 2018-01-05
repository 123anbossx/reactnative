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
  TouchableOpacity,

} from 'react-native';
 var Cardata=require('./Car.json');
 var Dimensions=require('Dimensions');
  var Width=Dimensions.get('window').width;
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  constructor(props){
    var getSectionData=(dataBlog,sectionID)=>{
        return  dataBlog[sectionID]
    };
    var getRowData=( dataBlog,sectionID,rowID)=>{
        return  dataBlog[sectionID+':'+rowID]
    };

    super(props);
      this.state={
         dataSource:new ListView.DataSource({
             getSectionData:getSectionData,//获取组中数据，
             getRowData:getRowData,//获取行中数据，
             rowHasChanged:(r1,r2)=>r1!==r2,
             sectionHeaderHasChanged:(s1,s2)=>s1!==s2
         })
      }
  }
  render() {
    return (
        <View style={styles.containers}>
          <View style={styles.logstyle}>
            <Text style={styles.logtext}>小马哥旗下品牌</Text>
          </View>
          <ListView
              style={styles.liststyle}
              dataSource={this.state.dataSource}
              renderRow={(rowData, sectionID, rowID, highlightRow)=>this.renderRow(rowData, sectionID, rowID, highlightRow)}
              renderSectionHeader={(sectionData, sectionID)=>this. renderSectionHeader(sectionData, sectionID)}
          />
        </View>

    );
  }
    renderRow(rowData, sectionID, rowID, highlightRow){
          return(
              <TouchableOpacity activeOpacity={0.5}>
                <View style={styles.rowstyle}>
                  <Image source={{uri:rowData.icon}}style={styles.imgstyle}/>
                  <Text style={styles.namestyle}>{rowData.name}</Text>
                </View>
              </TouchableOpacity>
          )
    }
    renderSectionHeader(sectionData, sectionID){
         return(
             <View>
               <Text style={styles.sectionstyle}>{sectionData}</Text>
             </View>
         )
    }
  componentDidMount(){
    this.loadDataFromjson();

  }
  loadDataFromjson(){
      var jsondata=Cardata.data;
      var dataBlog={};
      var sectionIDs=[];
      var rowIDs=[];
      var cars=[];
      for(var i=0;i<jsondata.length;i++){
        //把组号放进sectionID
        sectionIDs.push(i);
        //取出组中所有的title
        dataBlog[i]=jsondata[i].title;
        //取出每组中所有的车
          cars=jsondata[i].cars;
          rowIDs[i]=[];
          for(var j=0;j<cars.length;j++){
            //把行号放入rowIDs中
             rowIDs[i].push(j);
              dataBlog[i+':'+j]=cars[j];
          }
      }
      this.setState({
          dataSource:this.state.dataSource.cloneWithRowsAndSections(dataBlog,sectionIDs,rowIDs)
      })
  }
}

const styles = StyleSheet.create({

    containers:{
        backgroundColor:'#fffeff'
    },
    liststyle:{
      marginTop:20,
    },
    logstyle:{

    },
    logtext:{

        color:'#2f2f2f',
        fontSize:20,
       textAlign:'center',
    },
    rowstyle:{
        flexDirection:'row',
        alignItems:"center",
        borderBottomColor:'#f7f4f8',
        borderBottomWidth:1,
    },
    imgstyle:{
        width:50,
        height:50,
        resizeMode:'cover',
         marginTop:10,
        marginBottom:10,
    },
    namestyle:{
        height:20,
        color:'#040406',

        marginLeft:10,


    },
    sectionstyle:{

        color:'#1f1f1f',
       backgroundColor:'#f0eeef',
        fontSize:15,
    }

});
