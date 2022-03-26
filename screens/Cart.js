import React from 'react';
import {View,Text} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import styles from '../style/styles';

const Cart = () =>{
    return(
        <View style={styles.AboutContainer}>
           
            <Text style={styles.AboutText}>The cart is Empty</Text>
        </View>
    );
};

export default Cart;