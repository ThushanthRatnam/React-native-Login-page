//import React from 'react';
//import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {SafeAreaView,StyleSheet,ScrollView, View,Text,StatusBar,} from 'react-native';
//import { NavigationContainer } from '@react-navigation/native';

import Login from './src/pages/Login';
import Signup from './src/pages/Signup';
//import Routes from './src/routes/Routes';

export default class App extends Component{
  render(){
    return(
      <View style={styles.container}>
        <StatusBar 
        backgroundColor="#00838F"
        barStyle="light-content"
        />
        <Login/>
        
        
      </View>
    );
  }
};

const styles=StyleSheet.create({
container:{
  flex:1,
  backgroundColor:'#00838F',
  alignItems:'center',
  justifyContent:'center'
 
}
});

//export default App;
