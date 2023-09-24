
import { FlatList, StyleSheet, Text, View, Modal} from 'react-native';
import Header from './src/components/header';
import SearchBar from './src/components/searchBar';
import BannerMovies from './src/components/banner';
import Filmes from './src/data/filmes';
import Series from './src/data/series';
import CardMovies from './src/components/cardFilmes';
import CardSeries from './src/components/cardSeries';
import {SimpleModal} from './src/components/modal';
import React, { useState } from 'react';


export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [chooseData, setChooseData] = useState({
    titulo: '',
    imagem: '',
    descricao: ''
  });

  const changeModalVisible = (bool, titulo, imagem, descricao) => {
    setIsModalVisible(bool);
    setChooseData({ titulo, imagem, descricao });
  };

  const setData = (data) => {
    setChooseData(data);
  };
  
  return (
    <View style={styles.container}>
      <Header></Header>
      <SearchBar></SearchBar>
      <BannerMovies></BannerMovies>
      <View style={{width:'94vw'}}>
        
      <Modal transparent={true} animationType='fade' visible={isModalVisible} onRequestClose={() => changeModalVisible(false)}> 
        <SimpleModal
          changeModalVisible={changeModalVisible}
          chooseData={chooseData}
        />
      </Modal>
        
      <FlatList
          showsHorizontalScrollIndicator = {false}
          horizontal = {true}
          data = {Filmes}
          keyExtractor = {(item) => item.id}
          renderItem = {({item}) => (
            <CardMovies
            titulo = {item.nome}
            imagem = {item.imagem}
            preco = {item.preco}
            nota = {item.nota}
            descricao={item.descricao}
            changeModalVisible={changeModalVisible}
            ></CardMovies>
      )}
      />
      <Text style = {{flex: 1, fontSize:25, color:'white', fontWeight:'bold', paddingTop: 10, paddingBottom: 10 }}>
      Mais jogados:</Text>

      <FlatList
          showsHorizontalScrollIndicator = {false}
          horizontal = {true}
          data = {Series}
          keyExtractor = {(item) => item.id}
          renderItem = {({item}) => (
            <CardSeries
            titulo = {item.nome}
            imagem = {item.imagem}
            preco = {item.preco}
            nota = {item.nota}
            descricao={item.descricao}
            changeModalVisible={changeModalVisible}
            ></CardSeries>
      )}
      />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191970',
    alignItems: 'center',
    
  },
});
