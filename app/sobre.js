import {View, Text, Button, StyleSheet} from 'react-native';
import { Link } from 'expo-router';

export default function Sobre() {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>ℹ️ Sobre o App</Text>
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
});