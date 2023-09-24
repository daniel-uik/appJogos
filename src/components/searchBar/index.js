import React from 'react'
import { TextInput,View,TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons';
import styles from './styles';

export default function SearchBar(){

  return(
    <View style={styles.containerSearch}>
        <View style = {styles.Main}>
            <TextInput placeholder="Digite o jogo desejado" style = {styles.Input}></TextInput>
             
        </View>
      <View style={styles.buttonP}>
        <TouchableOpacity>
          <Feather name="search" style = {styles.icon} size={22} color="#191970"/>
        </TouchableOpacity>
      </View>
    </View>    

      );

}