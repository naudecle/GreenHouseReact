import * as React from "react";
import {Text,View,Image} from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();
function MainScreen(){
    return(
        <View>
             <Text>User</Text>
        </View>
    );
    
}

function SettingsScreen(){
    return(
        <View>
            <Text>User</Text>
        </View>
    )
}
function TabScreen(){
    return(
        <Tab.Navigator>
            
            <Tab.Screen name="Main" component={MainScreen}/>
            <Tab.Screen name="Cart" component={SettingsScreen}/>
        </Tab.Navigator>
    );
}

export default TabScreen;