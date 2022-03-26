import React, {Component} from 'react';
import {  Text, View, Image, Alert, TouchableOpacity } from 'react-native';
import {FlatGrid} from 'react-native-super-grid'

import styles from '../style/styles';

import Images from '../data/MahaData';

function MahaShop(){
    const [items, setItems] = React.useState([
        {name:'Fleur de lys', image: Images.images1, prix:'MUR10'},
        {name:'Gerbra Bouquet',  image: Images.images2, prix:'MUR80'},
        {name: 'Rose Bouquet', image: Images.images3, prix:'MUR90'},
        {name: 'Black-Eyed Susan', image:Images.images4, prix:'MUR50'},
        {name:'Clematite', image:Images.images5, prix:'MUR50'},
        {name:'Lys Calla', image:Images.images6, prix:'MUR80'},
        {name:'Marguerite', image:Images.images7, prix:'MUR70'},
        {name:'Gardenia', image:Images.images8, prix:'MUR60'},
        {name:'Hibiscus', image:Images.images9, prix:'MUR60'},
        {name:'Hortensia', image:Images.images10, prix:'MUR60'},
        {name:'Sunflower', image:Images.images11, prix:'MUR80'},
        {name:'Violet', image:Images.images12, prix:'MUR70'},
    ]);
    return(
        
        <FlatGrid
            name = 'Maha Green House'
            itemDimension={130}
            data={items}
            spacing={20}
            style={styles.gridView}
            renderItem={({item})=>(
                <View style={styles.itemContainer}>
                   
                    <Image
                        source = {item.image}
                        style={{width:120, height:140}}

                    />
                     <Text style={styles.subtext}>{item.name}</Text>
                     <Text style={styles.pricetext}>{item.prix}</Text>
                   
                    <TouchableOpacity style={styles.gridButton} onPress={()=> Alert.alert("Add to the cart")}>
                        <Text style={styles.textsButton}>Add Cart</Text>
                    </TouchableOpacity>
                </View>
            )}
        />
        
    );
}

/*class MahaStore extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.texts}> Maha Green House</Text>
                <Image
                    source = {require('../assets/fleur1.jpg')}
                    style={{width:112, height:120}}

                />
                <Text style={styles.texts}>Gerbra Bouquet</Text>
                <TouchableOpacity style={styles.buttons} onPress = {()=> Alert.alert("Buy")}>
                    <Text style={styles.textsButton}>Buy</Text>
                </TouchableOpacity>
                 <Image
                    source = {require('../assets/fleur2.jpg')}
                    style={{width:112, height:120}}

                />
            </View>
        )
    }
}*/



export default MahaShop;