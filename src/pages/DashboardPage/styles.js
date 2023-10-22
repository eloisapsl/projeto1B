import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    containerdash: {
        height:'100%',
        width:'100%',
        backgroundColor:'black',
    },
    header: {
        width:'100%',
        height:'300px',
        flexDirection:'row',
        justifyContent:'space-between',
        padding:'15px'
    },
    containerTitulo: {
        width:'50%',
        height:'100%',
        alignItems:'center',
        justifyContent:'center',
        paddingTop:'60px'
    },
    titulo1:{
        fontSize:'25px',
        fontFamily:'Poppins',
        fontWeight:'bold',
        color:'white'
    },
    subtitulo: {
        fontSize:'16px',
        fontFamily:'Poppins',
        fontWeight:'bold',
        color:'white'
    },
    containerImg: {
        width:'50%',
        height:'100%',
        alignItems:'center',
        justifyContent:'center'
    },
    imgheader: {
        width:'60%',
        height:'50%'
    },
    containergeneros: {
        width:'100%',
        height:'130px',
    },
    textoscroll: {
        fontSize:'18px',
        fontFamily:'Poppins',
        fontWeight:'bold',
        color:'white',
        paddingLeft:'15px'
    },
    genero:{
        width:'110px',
        margin:'10px',
        backgroundColor:'#FEC603',
        borderRadius:'20px',
        alignItems:'center',
        justifyContent:'center'
    },
    txtgenero: {
        fontSize:'14px',
        fontFamily:'Poppins',
        fontWeight:'bold',
        color:'black',
    },
    musicas: {
        width:'100%',
        height:'80px',
        flexDirection:'row',
        padding:'10px',
    },
    fotomus: {
        width:'30%',
        height:'100%',
        alignItems:'center',
        justifyContent:'center'
    },
    imgmusica: {
        width:'100%',
        height:'100%'
    },
    texto: {
        justifyContent:'center'
    },
    titulomus:{
        fontSize:'14px',
        fontFamily:'Poppins',
        fontWeight:'600',
        color:'white',
    },
    subtitulomus:{
        fontSize:'12px',
        fontFamily:'Poppins',
        fontWeight:'400',
        color:'white',
    },
    txtMenor:{
        width:'100%',
        padding:'15px',
        fontSize:'16px',
        fontFamily:'Poppins',
        fontWeight:'400',
        color:'white', 
    }
})

export default styles;