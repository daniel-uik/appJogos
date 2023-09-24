import React from 'react';
import {Image,Text,TouchableOpacity} from 'react-native';
import styles from './style';

export default function CardMovies({titulo,imagem,preco,nota,descricao,changeModalVisible}){
  return (
    <TouchableOpacity onPress={() => changeModalVisible(true, titulo, imagem, descricao)} style={styles.containerJogos}>
      <Image style={styles.images} source={require(`../../Img/${imagem}`)} />
      <Text style={styles.titulo}>{titulo}</Text>
      <Text style={styles.textPreco}>{preco}</Text>
      <Text style={styles.textNota}>{nota}</Text>
    </TouchableOpacity>
  );
}
