import {View, Text, Image, Button, StyleSheet} from 'react-native';
import { Link } from 'expo-router';
import { ScrollView } from 'react-native';

export default function Produtos() {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Veja nossos produtos!</Text>
            <Link href="/" asChild>
                <Button title="⬅️ Voltar para Home"/>
            </Link>
            <ScrollView contentContainerStyle={[styles.productsContainer, { alignItems: 'center', justifyContent: 'center' }]}>
            <Image 
                source={{ uri: 'https://assets.aboutamazon.com/dims4/default/478ffa8/2147483647/strip/false/crop/1280x720+0+0/resize/1200x675!/quality/90/?url=https%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2Ff9%2F25%2Fe4aa62e5408ca8764934782e7010%2Fcombo-1280x720.jpg' }}
                style={{ width: 200, height: 200, marginVertical: 20 }}
            />
            <Image 
                source={{ uri: 'https://ignitemag.co.uk/wp-content/uploads/2024/01/most-wanted-tech-devices2-jpg.webp' }}
                style={{ width: 200, height: 200, marginVertical: 20 }}
            />
            <Image 
                source={{ uri: 'https://img.freepik.com/premium-photo/toys-kids-play-time-colorful-fun-composition_594847-3791.jpg?w=360' }}
                style={{ width: 200, height: 200, marginVertical: 20 }}
            />
            <Image 
                source={{ uri: 'https://prh.imgix.net/articles/top10-fiction-1600x800.jpg' }}
                style={{ width: 200, height: 200, marginVertical: 20 }}
            />

            </ScrollView>

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
        marginTop: 20,
    },
    subtitulo: {
        fontSize: 18,
        marginVertical: 10,
    },
    productsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 20,
    },
});
