import React, {Component} from 'react';
import {StyleSheet,View,Text,TextInput,TouchableOpacity,Button} from 'react-native';
import Logo from './Logo';

export default class Form extends Component{

    /*static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('name'),
            headerShown: false,
        };
    };*/
    
render(){
    return(
        <View style={styles.container}>
         <Logo/>
            
        <TouchableOpacity style={{ height: 300, backgroundColor: '#EC407A',marginTop:20}}>
            <Text style={styles.c}>Name</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ height: 300, backgroundColor: '#EC407A',marginTop:20}}>
            <Text style={styles.c}>E-mail</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ height: 300, backgroundColor: '#EC407A',marginTop:20}}>
            <Text style={styles.c}>Password</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ height: 300, backgroundColor: '#EC407A',marginTop:20}}>
            <Text style={styles.c}>Status</Text>
        </TouchableOpacity>

        <Button>
            <Text>Save Changes</Text>
        </Button>
        


        </View>
    );}
};

const styles=StyleSheet.create({
    container:{
      flex:1,
      flexDirection: 'column',
      backgroundColor:'#455a64',
      alignItems:'center',
      justifyContent:'center'
    },
    inputBox:{
        width:300,
        //backgroundColor:'white',
        borderRadius:20,
        paddingHorizontal:25,
        fontSize:15,
        color:"black",
        marginVertical:10
    },
    buttonText:{
        fontSize:15,
        fontWeight:'300',
        color:'#ffffff',
        margin:10
    },
    
});