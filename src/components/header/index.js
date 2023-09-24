import React from 'react'
import {View,Text, TouchableOpacity, Image} from 'react-native'
import { Feather } from '@expo/vector-icons';
import styles from './styles';

export default function Header(){
    return(
        <View style = {styles.viewHeader}>
         <TouchableOpacity> 
        <Feather style={styles.menu} name="menu" size={36} color="white" />
        </TouchableOpacity>  
        <Text style = {styles.textHeader}>CloudGames</Text> 
        <Image source={require('../../Img/logosemfundo.png')} style={styles.logoHeader} resizeMode="contain"/>
        </View>
    );
}