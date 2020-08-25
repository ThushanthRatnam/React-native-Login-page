import React, {Component} from 'react';
import {SafeAreaView,StyleSheet,ScrollView, View,Text,StatusBar,Image} from 'react-native';

export default class Logo extends Component{
render(){
    return(
        <View style={styles.container}>
            <Image style={{width:70,height:100,marginTop:10}}
            source={require('../images/App.jpg')}
            />
            <Text style={styles.logoText}>Wel come to my App</Text>
        </View>
    );}
};

const styles=StyleSheet.create({
    container:{
      flex:1,
      //backgroundColor:'#455a64',
      alignItems:'center',
      justifyContent:'center'
    },
    logoText:{
        fontSize:15,
        color:"#F2FDE4",
        marginTop:15,
        alignItems:'center',
        
    }
    });