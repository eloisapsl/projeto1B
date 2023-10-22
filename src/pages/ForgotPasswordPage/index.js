import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import { ImageBackground } from 'react-native';
import {Link, NavigationContainer} from '@react-navigation/native';


export default function ForgotPasswordPage(){
    return(
    <View style={styles.containerSenha}>
        <View style={styles.containerInputs}>
            <View style={styles.txtInput}>
                <Text style={styles.tituloLogin}>Esqueceu sua senha?</Text>
                <Text style={styles.txtMenor}>Insira um e-mail válido para que possamos redefinir sua senha.</Text>
                <TextInput style={styles.pholder} placeholder='email'/>
                <TouchableOpacity style={styles.button}>
                <Link to={{screen: 'HomePage'}} style={styles.tLoginbutton}>Enviar</Link>
                </TouchableOpacity>
            </View>
        </View>
        
        
    </View>
    )
}