import React, { Fragment, useState, useEffect } from "react";
import { Image, Text, TouchableOpacity, View, Animated } from 'react-native';
import styles from './styles';
import { Feather } from '@expo/vector-icons';


const Imagens = [1, 2, 3, 4]; // Lista de imagens disponíveis

export default function BannerMovies() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const opacityAnim = useState(new Animated.Value(1))[0];

  useEffect(() => {
    const fadeIn = () => {
      Animated.timing(opacityAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    };

    const fadeOut = () => {
      Animated.timing(opacityAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start();
    };

    const interval = setInterval(() => {
      fadeOut();
      setTimeout(() => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % Imagens.length);
        fadeIn();
      }, 500);
    }, 3000);

    return () => {
      clearInterval(interval);
      opacityAnim.setValue(1);
    };
  }, []);

  const handleNextImage = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % Imagens.length);
  };

  const handlePreviousImage = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + Imagens.length) % Imagens.length);
  };

  return (
    <>
      <Text style={styles.textBanner}>Lançamentos:</Text>
      <View style={styles.carouselContainer}>

        <Animated.View style={[styles.imageWrapper, { opacity: opacityAnim }]}>
          <Image style={styles.imageBanner} source={require(`../../Img/${Imagens[currentIndex]}.jpg`)} />
        </Animated.View>

        <View style={{flexDirection: 'row', justifyContent: "space-between"}}>
        <TouchableOpacity onPress={handlePreviousImage} style={styles.carouselButton}>
        <Feather style={styles.carouselButtonTextPrev} name="arrow-left-circle" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity onPress={handleNextImage} style={styles.carouselButton}>
          <Feather style={styles.carouselButtonTextNext} name="arrow-right-circle" size={24} color="black" />
        </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
