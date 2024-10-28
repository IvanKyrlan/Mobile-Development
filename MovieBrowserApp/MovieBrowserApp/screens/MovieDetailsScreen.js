import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import axios from 'axios';

export default function MovieDetailsScreen({ route }) {
    const { movieId } = route.params;
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        axios.get(`http://www.omdbapi.com/?apikey=9a3fe892&i=${movieId}`)
            .then(response => {
                setMovie(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, [movieId]);

    if (!movie) {
        return <Text style={styles.loadingText}>Loading...</Text>;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{movie.Title} ({movie.Year})</Text>
            <Image source={{ uri: movie.Poster }} style={styles.poster} />
            <Text style={styles.label}>Director:</Text>
            <Text style={styles.info}>{movie.Director}</Text>
            <Text style={styles.label}>Genre:</Text>
            <Text style={styles.info}>{movie.Genre}</Text>
            <Text style={styles.label}>Plot:</Text>
            <Text style={styles.plot}>{movie.Plot}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#000',
        alignItems: 'center',
    },
    loadingText: {
        color: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 20,
        textAlign: 'center',
    },
    poster: {
        width: 200,
        height: 300,
        marginBottom: 20,
        borderRadius: 15,
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 5,
        alignSelf: 'flex-start',
    },
    info: {
        fontSize: 16,
        color: '#fff',
        textAlign: 'justify',
        marginBottom: 10,
    },
    plot: {
        fontSize: 16,
        color: '#fff',
        textAlign: 'justify',
        marginTop: 10,
    },
});
