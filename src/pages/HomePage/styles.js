import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    containerHome: {
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerDentro: {
        height:'80%',
        width:'85%',
        alignItems: 'center',
        justifyContent:'space-evenly'
       
    },
    containerImg: {
        width:'80%',
        height: '50%',
        alignItems:'center',
    },
    iconimg: {
        width:'100%',
        height:'100%'
    },
    titulo: {
        color: 'white',
        fontFamily: 'Poppins',
        fontSize: '25px',
        fontWeight:'bold',
    },
    descricao: {
        width:'90%',
        color: 'white',
        fontFamily: 'Poppins',
        fontSize: '16px',
        textAlign: 'center',
        color: '#8C8C8C'
    },
    button: {
        height:'47px',
        width: '80%',
        marginTop: '5px',
        marginBottom: '5px',
        backgroundColor: '#FEC603',
        borderRadius: '18px',
        justifyContent: 'center',
        borderWidth: 1.5
    },
    tLoginbutton: {
        width: '100%',
        fontFamily: 'Poppins',
        fontWeight: 'bold',
        fontSize: '12px',
        textAlign: 'center',
        color: '#333333'
    },
    ou: {
        width:'90%',
        color: 'white',
        fontFamily: 'Poppins',
        fontSize: '12px',
        fontWeight:'bold',
        textAlign: 'center',
        color: '#8C8C8C'
    }
})
export default styles;