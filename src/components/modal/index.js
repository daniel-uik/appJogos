import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';

const WIDTH = Dimensions.get('window').width;
const HEIGHT_MODAL = 450;

const SimpleModal = (props) => {
    const closeModal = () => {
        props.changeModalVisible(false, props.chooseData.titulo, props.chooseData.imagem, props.chooseData.descricao);
    };

  return (
    <TouchableOpacity disabled={true} style={styles.container}>
      <View style={styles.modal}>
      <TouchableOpacity onPress={closeModal} style={styles.touchableClose}>
            <Feather name="x" size={24} color="black" />
          </TouchableOpacity>
        <View style={styles.imageView}>
          <Image style={styles.image} source={require(`../../Img/${props.chooseData.imagem}`)} />
        </View>
        <View style={styles.textView}>
          <Text style={[styles.text, { fontSize: 20, textAlign: 'center' }]}>{props.chooseData.titulo}</Text>
          <Text style={styles.text}>{props.chooseData.descricao}</Text>
        </View>
        <View style={styles.buttonsView}>
          <TouchableOpacity onPress={closeModal} style={styles.touchableJogar}>
            <Text style={[styles.text, { color: 'blue', fontSize: 20}]}>Jogar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  modal: {
    height: HEIGHT_MODAL,
    width: WIDTH - 40,
    paddingTop: 10,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  imageView: {
    flex: 1,
    overflow: 'hidden',
    borderRadius: 5
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  },
  textView: {
    flex: 1,
    alignItems: 'center',
    width: '100%'
  },
  text: {
    margin: 5,
    fontSize: 10,
    fontWeight: 'bold',
    width: '100%',
    paddingHorizontal: 20
  },
  buttonsView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  touchableClose: {
    alignItems: 'end',
    marginRight: 10
    
  },
  touchableJogar: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 140,
    marginBottom: 10
  },
});

export { SimpleModal };
