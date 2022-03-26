import React, { Component } from "react";
import {TouchableOpacity, Text,View,Alert,Image, ScrollView, TextInput} from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import styles from "../style/styles";
import MyStack from "./Log1";


const StackUser = createNativeStackNavigator();

const ValidEmail = 'cleriaaude@gmail.com';
const ValidPassword = '123Victory';

const MyPassStack = ()=>{
    return(
        <StackUser.Navigator>
            <StackUser.Screen 
            name= "Forgot Password"
            component = {ForgotPassword}
            backgroundColor= 'rgba(160,113,84,0.6)'
            options={{headerShown:true}}
            />
            <StackUser.Screen 
            name= "Log"
            component = {MyStack}
            backgroundColor= 'rgba(160,113,84,0.6)'
            options={{headerShown:false}}
            />
        </StackUser.Navigator>
    )
}

class ForgotPassword extends Component{
   
    state={
        mail:'',
        password1:'',
        password2:'',
        errors: '',
        loading:false,
        hasErrors: false,
    }

    handlePass =(text)=>{
        const { navigation } = this.props;
        const { email, password1,password2 } = this.state;
        const errors = [];

        this.setState({hasErrors:false, errors:[], loading: true });

        if( email !== ValidEmail){
            //errors.push('email');
            this.setState({hasErrors: true, errors:"Email Incorrect"})
        }

        if( password1 !== password2){
            this.setState({ hasErrors: true, errors: "The two passwords don't match"})
           // errors.push('password');
        }
        if(password1 === ValidPassword){
            this.setState({ hasErrors: true, errors: "Same as one of the previous passwords"})
        }
        if (errors.length){
            this.setState( { errors, loading: false });
        }
        else{
            this.setState( { loading: false} );
           // navigation.navigate("Browse")
        }

        if( email === ValidEmail && password1 === password2){
            const Stack = createNativeStackNavigator();

            
            navigation.navigate("Log");
            
        }
        
    }

    render(){

        const navigation = this.props.navigation;
        return(
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.registerContainer}>
                        {this.state.hasErrors ? <Text style={styles.hasErrors}>{this.state.errors}</Text>:null}
                        <Text style={styles.registerTexts}>Email</Text>
                        <TextInput 
                        style={styles.txtInput} 
                        defaultValue={this.state.mail}
                        onChangeText={text=>this.setState({email:text})} 
                        placeholder="Enter your Email Adress"/>

                        <Text style={styles.registerTexts}>Password</Text>
                        <TextInput  
                        style={styles.txtInput} 
                        defaultValue={this.state.mail}
                        onChangeText={text=>this.setState({password1:text})} 
                        secureTextEntry={true}
                        placeholder="Enter your Password"/>

                        <Text style={{marginRight:180,fontSize:17,borderBottomColor: '#A07154',color: '#763f3f',}}>Confirm Password</Text>
                        <TextInput 
                        style={styles.txtInput} 
                        defaultValue={this.state.mail}
                        onChangeText={text=>this.setState({password2:text})} 
                        secureTextEntry={true}
                        placeholder="Confirm your Password"/>
                        
                        
                        <TouchableOpacity style={styles.buttons} onPress={()=>this.handlePass()}>
                        <Text style={styles.textsButton}>Submit</Text>
                        </TouchableOpacity>
                        
                    </View>
                </ScrollView>
            </View>
            
            
        );
    };
    
};


 



export default MyPassStack;