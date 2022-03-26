import React, { Component } from "react";
import {StyleSheet,Button, Text,View,Alert,TextInput,} from "react-native";
import { Link, NavigationContainer } from "@react-navigation/native";


class MailForm extends Component{
    render(){
        return(
            <View>
                <Text style={styles.header}>Verify your mail</Text>
                <Text style={{alignSelf:'stretch'}}>Email</Text>
                <TextInput style={styles.txtInput} placeholder="Enter your mail"/>
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

  export default MailForm;