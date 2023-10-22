import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import {Link, NavigationContainer} from '@react-navigation/native';

export default function HomePage(){
    return(
        <View style={styles.containerHome}>
            <View style={styles.containerDentro}>
                <View style={styles.containerImg}>
                <Image source={require('../../assets/taxi-music.png')} style={styles.iconimg} resizeMode='contain'></Image>
                </View>
                    <Text style={styles.titulo}>Olá, ouvinte!</Text>
                    <Text style={styles.descricao}>Entre em sua conta ou registre-se agora para ouvir suas músicas favoritas!</Text>
                    <TouchableOpacity style={styles.button}>
                        <Link to={{screen: 'LoginPage'}} style={styles.tLoginbutton}>Login</Link>
                </TouchableOpacity>
                <Text style={styles.ou}>ou</Text>
                <TouchableOpacity style={styles.button}>
                <Link to={{screen: 'RegisterPage'}} style={styles.tLoginbutton}>Registrar-se</Link>
                </TouchableOpacity>
            </View>
            
        </View>
    )
}