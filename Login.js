import React, {Component} from 'react';
import {View,Text,StyleSheet,TextInput,TouchableOpacity} from 'react-native';

import Logo from '../components/Logo';
//import Form from '../components/Form';
//import { Actions } from 'react-native-router-flux';
//import { NavigationContainer } from '@react-navigation/native';

export default class Login extends Component{
    
   /* static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('name'),
            headerShown: false
        };
    };*/
    Signup() 
    {
        Actions.Signup();
    }

render(){

    //const { navigate, state } = this.props.navigation;
    return(
        <View style={styles.container}>
            <Logo/>
            <TextInput style={styles.inputBox}
             /*underlineColorAndroid='black'*/
             placeholder="E-mail"
             /*placeholderTextColor="White"*/ />

            <TextInput style={styles.inputBox}
             /*underlineColorAndroid='black'*/
             placeholder="Password"
             /*placeholderTextColor="White"*/
             secureTextEntry/>

            <TouchableOpacity>
                 <Text style={styles.buttonText}>
                    {/*onPress={() => navigate(
                    'Form', { name: 'Back' },)}*/}
                        Login
                 </Text>
             </TouchableOpacity>

            <View style={styles.signupTxt}>                
                <Text style={styles.txt}>Don't have any account yet? </Text>
                <TouchableOpacity>
                    <Text style={styles.signupButton}>Signup</Text> 
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
        paddingHorizontal:20,
        fontSize:15,
        color:"black",
        marginVertical:10
    },
    buttonText:{
        fontSize:25,
        backgroundColor:'#D84315',
        borderRadius:20,
        fontWeight:'300',
        color:"black",
        margin:15,
        width:300,
        height:40,
        paddingLeft:100,
        //paddingHorizontal:25,
        alignItems:'center',
        justifyContent:'center'
    },
    });