import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    viewHeader: {
        width: '100vw',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        height: 60
        
    },

    textHeader:{
        flex: 1,
        fontSize:25,
        color:'white',
        fontWeight:'bold',
        textAlign: 'center',
        padding: 0,
        margin: 0
    },

    menu: {
        padding: 0,
        paddingRight: 20,
        margin: 0
    },
    
    logoHeader: {
        width: 60,
        height: 60,
        padding: 0,
        margin: 0
    }

})

export default styles;