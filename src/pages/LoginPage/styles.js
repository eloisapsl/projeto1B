import { StyleSheet } from 'react-native';



const styles = StyleSheet.create({
    containerLogin: {
        backgroundColor: '#000000',
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerInputs: {
        height: '80%',
        width: '80%',
        textAlign: 'center'
        
    },
    txtInput: {
        alignItems: 'center',
        justifyContent:'center',
        width: '100%',
        height: '80%',
    },
    pholder: {
        width: '80%',
        height: '47px',
        backgroundColor: '#555555',
        borderWidth: 1.5,
        textAlign: 'left',
        marginTop: '5px',
        marginBottom: '5px',
        paddingLeft: '15px',
        fontFamily: 'Poppins',
        fontSize: '12px',
        fontWeight:'290',
        borderRadius: '18px',
        placeholderTextColor: '#9E9E9E',
        color: 'white'
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
    tLogin: {
        width: '100%',
        fontFamily: 'Poppins',
        fontWeight: '600',
        fontSize: '18px',
        textAlign: 'center',
        color: 'white'
    },
    tLoginbutton: {
        width: '100%',
        fontFamily: 'Poppins',
        fontWeight: 'bold',
        fontSize: '12px',
        textAlign: 'center',
        color: '#333333'
    },
    senhas: {
        height: '30px',
        width: '80%',
        paddingRight: '10px',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    txtMenor:{
        fontFamily: 'Poppins',
        fontSize: '11px',
        color: '#8C8C8C',
    },
    register: {
        height: '60px',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    txtButtonRegistro: {
        width: '100%',
        fontFamily: 'Poppins',
        fontWeight: 'bold',
        fontSize: '12px',
        textAlign: 'center',
        color: '#333333'
    },
    buttonRegistro: {
        height:'47px',
        width: '80%',
        backgroundColor: '#FEC603',
        borderRadius: '20px',
        justifyContent: 'center',
        marginTop: '10px',
        borderWidth: 1.5
    }

});

export default styles;