import React, { Component } from "react";
import {Button, Text,View, TextInput,} from "react-native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import styles from "../style/styles";
import HomeScreen from "./Home1";

const ValidEmail = 'cleriaaude@gmail.com';
const ValidPassword = '123Victory';

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

            const MyStack = () =>{
                return(
                    <Stack.Navigator>
                        <Stack.Screen
                            name = "Home"
                            component = {Home1Screen}
                            backgroundColor= 'rgba(160,113,84,0.6)'
                            options = {{title : "Maha GreenHouse", headerStyle:{backgroundColor:'#A07154'}, headerTintColor:'#763f3f', headerTitleAlign:'center', headerTitleStyle:{fontSize:35,fontWeight:"bold"}}}
                        />
                        <Stack.Screen 
                            name="Welcome" 
                            component = {HomeScreen}
                            options = {{title : "Maha store", headerStyle:{backgroundColor:'#A07154'}, headerTintColor:'#763f3f', headerTitleAlign:'center', headerTitleStyle:{fontSize:35,fontWeight:"bold"}}}
                        />
                    </Stack.Navigator>
                );
                
            };

            const Home1Screen = ({navigation})=>{
                return(
                    <SafeAreaView style={styles.container}>
                        <ImageBackground source={require('../assets/wall.jpg')} resizeMode='cover' style={{width: 450, height: 750, flex:1.2}} >
      
                            <View style ={styles.container}>
        
                                <Text style={styles.titles}>Maha Green House</Text>
            

                                <TouchableOpacity style={styles.buttons} onPress={()=> navigation.navigate('Welcome', { name : 'welcome'})}>

                                <Text style={styles.textsButton}>Welcome To our Store!</Text>
                                </TouchableOpacity>

                            </View>
                        </ImageBackground>
                    </SafeAreaView>
                );
            };
            navigation.navigate("HomeScreen");
            
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
                style={styles.txtInput}
                defaultValue={this.state.password} 
                placeholder="Enter your Password" 
                secureTextEntry={true}
                
                onChangeText={text=>this.setState({ password: text })} 
                />
                <Button

                title = "Log In"
                color='#A07154'

                onPress={()=> this.handleLogin()}
                
                />
                
                <Text style={styles.forgotPassword}>Forgot your Password</Text>
            </View>
        );
    };
    
};



  export default LogForm;