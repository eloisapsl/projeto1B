import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, SafeAreaView, ScrollView} from 'react-native';
import styles from './styles';
import {Link, NavigationContainer} from '@react-navigation/native';

export default function DashboardPage(){
    return(
        <SafeAreaView style={styles.containerdash}>
            <ScrollView>
            <View style={styles.header}>
                    <View style={styles.containerTitulo}>
                        <Text style={styles.titulo1}>Olá, fulano!</Text>
                        <Text style={styles.subtitulo}>Como está?</Text> 
                     </View>
                    <View style={styles.containerImg}>
                        <Image source={require('../../assets/iconmain100.png')} resizeMode='contain' style={styles.imgheader}/>
                    </View>
            </View>
            <Text style={styles.textoscroll}>Seus gêneros favoritos</Text>
            <SafeAreaView style={styles.containergeneros}>
                <ScrollView horizontal={true} style={styles.scrollgeneros}>
                    <View style={styles.genero}>
                        <Text style={styles.txtgenero}>Pop</Text>
                    </View>
                    <View style={styles.genero}>
                        <Text style={styles.txtgenero}>Rap</Text>
                    </View>
                    <View style={styles.genero}>
                        <Text style={styles.txtgenero}>Death Metal</Text>
                    </View>
                    <View style={styles.genero}>
                        <Text style={styles.txtgenero}>Country</Text>
                    </View>
                </ScrollView>
                
            </SafeAreaView>
            <Text style={styles.textoscroll}>Tocadas recentemente</Text>
            <View style={styles.musicas}>
                <View style={styles.fotomus}>
                 <Image source={require('../../assets/bmuscover.jpg')} resizeMode='contain' style={styles.imgmusica}/>   
                </View>
                <View style={styles.texto}>
                 <Text style={styles.titulomus}>Fractions</Text>
                <Text style={styles.subtitulomus}>Nicki Minaj</Text>   
                </View>
            </View>
            <View style={styles.musicas}>
                <View style={styles.fotomus}>
                 <Image source={require('../../assets/cer.png')} resizeMode='contain' style={styles.imgmusica}/>
                </View>
                <View style={styles.texto}>
                <Text style={styles.titulomus}>Castelos e Ruínas</Text>
                <Text style={styles.subtitulomus}>BK</Text>    
                </View>
            </View>
            <View style={styles.musicas}>
                <View style={styles.fotomus}>
                 <Image source={require('../../assets/djavan.jpg')} resizeMode='contain'style={styles.imgmusica}/>   
                </View>
                <View style={styles.texto}>
                <Text style={styles.titulomus}>Flor de Lis (Ao vivo)</Text>
                <Text style={styles.subtitulomus}>Djavan</Text>     
                </View>
            </View>

            <Link to={{screen:'HomePage'}} style={styles.txtMenor}>Sair</Link> 
            </ScrollView>
            
        </SafeAreaView>
    );
}