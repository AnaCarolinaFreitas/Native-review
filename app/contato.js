import {View, Text, Button, StyleSheet} from 'react-native';
import { Link } from 'expo-router';

export default function Contato() {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Telefone: (19) 0000-0000</Text>
            <Text style={styles.subtitulo}>Entre em contato conosco!</Text>
            <Link href="/" asChild>
                <Button title="⬅️ Voltar para Home" />
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    subtitulo: {
        fontSize: 18,
        marginVertical: 10,
    },
});