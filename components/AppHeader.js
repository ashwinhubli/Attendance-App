import React,{Component} from 'react';
import {View,Text} from 'react-native';
import {Header} from 'react-native-elements';

export default class AppHeader extends Component{
  render(){
   return(
    <View>
     <Header 
      backgroundColor={'#ff8123'}
      centerComponent={{text:'Attendance App',style:{color:'ggg',fontSize:20,fontWeight:'bold'},}}
      />
    </View> 
   ) 
  }
}