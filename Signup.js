import React, {Component} from 'react';
import {View,Text,StyleSheet,TouchableOpacity, TextInput} from 'react-native';

import Logo from '../components/Logo';
//import Form from '../components/Form';
//import { Actions } from 'react-native-router-flux';

export default class Signup extends Component{
    
    constructor(props)
    {
        super(props)
    }

    goBack() 
    {
        Actions.pop();
    }

render(){
    return(
        <View style={styles.container}>
            <Logo/>

            <TextInput style={styles.inputBox}
             underlineColorAndroid='black'
             placeholder="Full Name"
             placeholderTextColor="white"/>

            <TextInput style={styles.inputBox}
             underlineColorAndroid='black'
             placeholder="E-mail"
             placeholderTextColor="White"/>

            <TextInput style={styles.inputBox}
             underlineColorAndroid='black'
             placeholder="Password"
             placeholderTextColor="White"
             secureTextEntry/>

             <TouchableOpacity>
                 <Text style={styles.buttonText}>
                    {/*onPress={() => navigate(
                    'Form', { name: 'Back' },)}*/}
                        Signup
                 </Text>
             </TouchableOpacity>

            <View style={styles.signupTxt}>
                <Text style={styles.txt}>Already have an account? </Text>
                <TouchableOpacity>
                    <Text style={styles.signupButton}>Login</Text> 
                </TouchableOpacity>                     
            </View>
        </View>
    );}
};

const styles=StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#00838F',
      alignItems:'center',
      justifyContent:'center'
     },
     signupTxt:{
         flex:1,
         alignItems:'flex-end',
         justifyContent:'center',
         paddingVertical:16,
         flexDirection:'row',
     },
     txt:{
         fontSize:16,
         color:'rgba(255,255,255,0.6)',
     },
     signupButton:{
         color:'#ffffff',
         fontSize:16,
         fontWeight:'500'

     },
     inputBox:{
        width:300,
        backgroundColor:'#F2FDE4',
        borderRadius:20,
        paddingHorizontal:25,
        fontSize:15,
        color:"black",
        marginVertical:10
    },
    buttonText:{
        fontSize:15,
        backgroundColor:'#D84315',
        borderRadius:20,
        fontWeight:'300',
        color:"black",
        margin:10,
        width:300,
    },
    });