import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import {Link, NavigationContainer} from '@react-navigation/native';
import { useContext } from 'react';
import AuthContext from '../../contexts/AuthContext';


export default function LoginPage(){
    const {signIn} = useContext(AuthContext);
    return(
    <View style={styles.containerLogin}>
        <View style={styles.containerInputs}>
            <View style={styles.txtInput}>
                <Text style={styles.tLogin}>Entrar</Text>
                <TextInput style={styles.pholder} placeholder='email'/>
                <TextInput style={styles.pholder} placeholder='senha' secureTextEntry={true}/>
                <TouchableOpacity style={styles.button} onPress={() => signIn()}>
                <Text style={styles.tLoginbutton}>Login</Text>
                </TouchableOpacity>
                <View style={styles.senhas}>
                    <Link to={{screen: 'HomePage'}} style={styles.txtMenor}>Voltar para home</Link> 
                    <Link to={{screen: 'ForgotPasswordPage'}} style={styles.txtMenor}>Esqueci minha senha</Link>
                </View>
            </View>
            <View style={styles.register}>
                <Text style={styles.txtMenor}>Não possui uma conta?</Text>
                <TouchableOpacity style={styles.buttonRegistro}>
                <Link to={{screen: 'RegisterPage'}} style={styles.txtButtonRegistro}>Registre-se</Link>
                </TouchableOpacity>
            </View>
        </View>
        
        
    </View>
    )
}