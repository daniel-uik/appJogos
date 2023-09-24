import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    containerSearch:{
        marginTop: 10,
        flexDirection:'row',
        width: '94vw'
        
    },
    Main:{
        backgroundColor:'#FFF',
        width: '85%',
        height: 35,
        borderTopLeftRadius: 40,
        borderBottomLeftRadius: 40,
        borderWidth: 1,
        borderColor: '#C0C0C0'
    },
    Input:{
        marginLeft: 10,
        marginTop: 5

    },
    buttonP:{
        width: '15%',
        height: 35,
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderBottomRightRadius: 40,
        borderTopRightRadius: 40,
        borderColor: '#C0C0C0',
        justifyContent: 'center',
        alignItems: 'center'
},
    icon:{
        marginRight: 5
    }
})

export default styles;