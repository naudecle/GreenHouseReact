import React, { Component } from "react";
import {Button, Text, TextInput, View} from "react-native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//import { TextInput } from "react-native-paper";


import styles from "../style/styles";
import MyUserStack from "./user1";
import MyPassStack from "./Forgot";
import TabScreen from "./Home1";

const ValidEmail = 'cleriaaude@gmail.com';
const ValidPassword = '123Victory';

const Stack = createNativeStackNavigator();

const MyStack = () =>{
    return(
        <Stack.Navigator>
            <Stack.Screen
                name = "Home"
                component = {LogForm}
                backgroundColor= 'rgba(160,113,84,0.6)'
                options = {{title : "Maha GreenHouse", headerStyle:{backgroundColor:'#A07154'}, headerTintColor:'#763f3f', headerTitleAlign:'center', headerTitleStyle:{fontSize:35,fontWeight:"bold"}, headerShown: false}}
            />
            
            <Stack.Screen 
                name="Main" 
                component = {TabScreen}
                options = {{title : "Maha store", headerStyle:{backgroundColor:'#A07154'}, headerTintColor:'#763f3f', headerTitleAlign:'center', headerTitleStyle:{fontSize:35,fontWeight:"bold"}, headerShown:false}}
            />
            <Stack.Screen 
                name="Password" 
                component = {MyPassStack}
                options = {{title : "Maha store", headerStyle:{backgroundColor:'#A07154'}, headerTintColor:'#763f3f', headerTitleAlign:'center', headerTitleStyle:{fontSize:35,fontWeight:"bold"}, headerShown:false}}
            />
        </Stack.Navigator>
    );
    
};


class LogForm extends Component{
    state={
        mail:'',
        password:'',
        errors: '',
        loading:false,
        hasErrors: false,
    }

    handleLogin =(text)=>{
        const { navigation } = this.props;
        const { email, password } = this.state;
        const errors = [];

        this.setState({hasErrors:false, errors:[], loading: true });

        if( email !== ValidEmail){
            //errors.push('email');
            this.setState({hasErrors: true, errors:"PassWord or Email Incorrect"})
        }

        if( password !== ValidPassword){
            this.setState({ hasErrors: true, errors: "PassWord or Email Incorrect"})
           // errors.push('password');
        }
        if (errors.length){
            this.setState( { errors, loading: false });
        }
        else{
            this.setState( { loading: false} );
           // navigation.navigate("Browse")
        }

        if( email === ValidEmail && password === ValidPassword){
            const Stack = createNativeStackNavigator();

            
            navigation.navigate("Main");
            
        }
        
    }
    render(){
        const { navigation } = this.props;
        const { loading, errors }= this.state;
        const hasErrors = key => errors.includes(key) ? styles.hasErrors : null;
        return(
            <View style={styles.container}>
                <Text style={styles.titles}>SIGN IN</Text>
                <Text style={styles.texts}>Email</Text>
                {this.state.hasErrors ? <Text style={styles.hasErrors}>{this.state.errors}</Text>:null}
                <TextInput 
                style={styles.txtInput} 
                defaultValue={this.state.mail} 
                onChangeText={text=>this.setState({ email: text })} 
                placeholder="Enter your mail"
                />
                <Text style={styles.texts}>Password</Text>
                
                <TextInput
                label="Password"
                style={styles.txtInput}
                defaultValue={this.state.password} 
                placeholder="Enter your Password" 
                secureTextEntry
                onChangeText={text=>this.setState({ password: text })}
                />

                <Button

                title = "Log In"
                color='#A07154'

                onPress={()=> this.handleLogin()}
                
                />
                
                <Text style={styles.forgotPassword} onPress={()=>navigation.navigate("Password")}>Forgot your Password</Text>
            </View>
        );
    };
    
};



  export default MyStack;