import React, { Component } from "react";
import {StyleSheet,Button, Text,View,Alert,TextInput,} from "react-native";
import { Link, NavigationContainer } from "@react-navigation/native";


class PasswordForm extends Component{
    render(){
        return(
            <View>
                <Text style={styles.header}>Set Your Password</Text>
                <Text style={{alignSelf:'stretch'}}>New Password</Text>
                <TextInput style={styles.txtInput} placeholder="Enter your New Password" secureTextEntry={true}/>

                <Text style={{alignSelf:'stretch'}}>Confirm new Password</Text>
                <TextInput style={styles.txtInput} placeholder="Confirm your New Password" secureTextEntry={true}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'rgba(160,113,84,0.6)',
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
  
    texts: {
      fontSize:24,
      borderBottomWidth: 2,
      borderBottomColor: '#A07154',
      color: '#763f3f',
    },
  
    header:{
        alignSelf:'baseline',
        paddingBottom:40, 
        color:'#D68FB0', 
        fontSize:40, 
        fontWeight:'bold', 
    },
    txtInput:{
        borderBottomWidth:2, 
        borderBottomColor:'#D68FB0',
        margin:10,
        height:40,
        width:300, 
        backgroundColor:'#fff', 
        paddingLeft:10

    },
    button:{
        alignSelf:'stretch',
        justifyContent:'center',
        backgroundColor:'#D68FB0',
  
    },
  });

  export default PasswordForm;