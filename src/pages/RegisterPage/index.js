import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import { ImageBackground } from 'react-native';
import {Link, NavigationContainer} from '@react-navigation/native';


export default function RegisterPage(){
    return(
    <View style={styles.containerRegister}>
        <View style={styles.containerInputs}>
            <View style={styles.txtInput}>
                <Text style={styles.tLogin}>Criar nova conta</Text>
                <TextInput style={styles.pholder} placeholder='nome completo'/>
                <TextInput style={styles.pholder} placeholder='email'/>
                <TextInput style={styles.pholder} placeholder='senha'secureTextEntry={true}/>
                <TextInput style={styles.pholder} placeholder='confirmar senha' secureTextEntry={true}/>
                <TouchableOpacity style={styles.button}>
                <Link to={{screen: 'HomePage'}} style={styles.tLoginbutton}>Registrar-se</Link>
                </TouchableOpacity>
                <View style={styles.senhas}>
                    <Link to={{screen: 'HomePage'}} style={styles.txtMenor}>Voltar para home</Link> 
                </View>
            </View>
            <View style={styles.login}>
                <Text style={styles.txtMenor}>Já possui uma conta?</Text>
                <TouchableOpacity style={styles.buttonRegistro}>
                <Link to={{screen: 'LoginPage'}} style={styles.txtButtonRegistro}>Login</Link>
                </TouchableOpacity>
            </View>
        </View>
        
        
    </View>
    )
}