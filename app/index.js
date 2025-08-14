import {View, Text, Button, StyleSheet} from 'react-native';
import {Link} from "expo-router";

export default function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}> 🏡 Página Inicial</Text>
            <Link href="/sobre" asChild>
                <Button title="Ir para Sobre ➡️" />
            </Link>
            <Link href="/contato" asChild>
                <Button title="Ir para Contato 📞" />
            </Link>
            <Link href="/produtos" asChild>
                <Button title="Ir para Produtos 🛒" />
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