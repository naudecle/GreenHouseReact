import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, TouchableOpacity, Text, ImageBackground} from 'react-native';

import styles from '../style/styles';

import RegForm from './Register';
import MyStack from './Log1';


const Userstack = createNativeStackNavigator();

const userScreen =()=>{
    return(
        <Userstack.Navigator>
        <Userstack.Screen
            name = 'User Account'
            component={ScreenUser}
            backgroundColor= 'rgba(160,113,84,0.9)'
            options = {{title : "User Account", headerStyle:{backgroundColor:'#A07154'}, headerTintColor:'#763f3f', headerTitleAlign:'center', headerTitleStyle:{fontSize:35,fontWeight:"bold"}, headerShown:false}}
        
        />
        
        <Userstack.Screen name='SignUp'  
        component={RegForm}
        options = {{title : "Sign Up", headerStyle:{backgroundColor:'#A07154'}, headerTintColor:'#763f3f', headerTitleAlign:'center', headerTitleStyle:{fontSize:35,fontWeight:"bold"}}}
        />
        
        <Userstack.Screen name='Log' 
        component={MyStack}
        options = {{title : "Sign In", headerStyle:{backgroundColor:'#A07154'}, headerTintColor:'#763f3f', headerTitleAlign:'center', headerTitleStyle:{fontSize:35,fontWeight:"bold"}, headerShown:false}}
        />
    </Userstack.Navigator>
    )
    
}

const ScreenUser =({navigation})=>{
    return(
        <View style={styles.container}>
            
            <TouchableOpacity style={styles.buttons} onPress={()=>navigation.navigate('Log',{ name:'LogIn'})}>
                <Text style={styles.textsButton}>Sign in</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttons} onPress={()=>navigation.navigate('SignUp',{ name:'SignUp'})}>
                <Text style={styles.textsButton}>Sign Up</Text>
            </TouchableOpacity>

          
        </View>
    )
}

export default userScreen;