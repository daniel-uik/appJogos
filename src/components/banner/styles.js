import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

textBanner:{
    fontSize: 30,
    color: "white",
    marginTop: 15,
    marginLeft: '0 auto',
    fontWeight: 'Bold'
},
imageBanner:{
    width: '94vw',
    height:200,
    marginTop:10,
    borderRadius:10
},
carouselButtonTextPrev:{
    color: 'white',
    borderRadius: 30,
    fontSize: 30,
    textAlign: 'center',
    position: 'absolute',
    top: -120,
    left: -7,
    fontWeight: 'bold'
},
carouselButtonTextNext:{
    color: 'white',
    borderRadius: 100,
    fontSize: 30,
    textAlign: 'center',
    position: 'absolute',
    top: -120,
    right: -7,
    fontWeight: 'bold'
}
})

export default styles;