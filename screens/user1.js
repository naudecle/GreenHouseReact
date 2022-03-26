import React, { Component } from "react";
import {TouchableOpacity, Text,View,Alert,Image, ScrollView} from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import styles from "../style/styles";
//import userScreen from "./user";
import userScreen from "../App";


const StackUser = createNativeStackNavigator();

const MyUserStack = ()=>{
    return(
        <StackUser.Navigator>
            <StackUser.Screen 
            name= "User Profile"
            component = {User}
            backgroundColor= 'rgba(160,113,84,0.6)'
            options={{headerStyle:{backgroundColor:'#A07154'}, headerTintColor:'#763f3f', headerTitleAlign:'center', headerTitleStyle:{fontSize:35,fontWeight:"bold"},headerShown:true}}
            />
            <StackUser.Screen 
            name= "User"
            component = {userScreen}
            backgroundColor= 'rgba(160,113,84,0.6)'
            options={{headerShown:false}}
            />
        </StackUser.Navigator>
    )
}

class User extends Component{
   


    render(){

        const navigation = this.props.navigation;
        return(
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.registerContainer}>
                        <Text style={styles.titles}>PROFILE</Text>

                        <Image source={require('../assets/user.png')} style={{width:90, height:90, top:5}}/>
                        <Text style={styles.registerTexts}>NOM</Text>
                        <Text style={styles.txtInput}>NTUNGANE AUDE CLERIA</Text>

                        <Text style={styles.registerTexts}>Adress</Text>
                        <Text style={styles.txtInput}>Rose Hill</Text>
                         
                        <Text style={styles.registerTexts}>Age</Text>
                        <Text style={styles.txtInput}>22</Text>

                        <Text style={styles.registerTexts}>Sexe</Text>
                       <Text style={styles.txtInput}>Female</Text>
                        
                        <TouchableOpacity style={styles.buttons} onPress={()=>navigation.navigate('User', {name:'User'})}>
                        <Text style={styles.textsButton}>Log Out</Text>
                        </TouchableOpacity>
                        
                    </View>
                </ScrollView>
            </View>
            
            
        );
    };
    
};


 



export default MyUserStack;