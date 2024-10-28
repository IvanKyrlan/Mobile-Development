import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, FlatList, Text, StyleSheet } from 'react-native';
import axios from 'axios';

export default function SearchScreen({ navigation }) {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);

    const searchMovies = () => {
        axios.get(`http://www.omdbapi.com/?apikey=9a3fe892&s=${query}`)
            .then(response => {
                if (response.data.Search) {
                    setMovies(response.data.Search);
                }
            })
            .catch(error => {
                console.log(error);
            });
    };

    const clearSearch = () => {
        setQuery('');
        setMovies([]);
    };

    const renderMovie = ({ item }) => (
        <TouchableOpacity style={styles.movieItem} onPress={() => navigation.navigate('Details', { movieId: item.imdbID })}>
            <Text style={styles.movieTitle}>{item.Title} ({item.Year})</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Search for movies..."
                    placeholderTextColor="#999"
                    value={query}
                    onChangeText={setQuery}
                />

                {query.length > 0 && (
                    <TouchableOpacity onPress={clearSearch} style={styles.clearButton}>
                        <Text style={styles.clearButtonText}>Clear</Text>
                    </TouchableOpacity>
                )}
            </View>
            <TouchableOpacity style={styles.button} onPress={searchMovies}>
                <Text style={styles.buttonText}>Search</Text>
            </TouchableOpacity>
            <FlatList
                data={movies}
                renderItem={renderMovie}
                keyExtractor={item => item.imdbID}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#000',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    input: {
        flex: 1,
        height: 50,
        borderColor: '#444',
        borderWidth: 1,
        paddingHorizontal: 15,
        borderRadius: 8,
        backgroundColor: '#333',
        color: '#fff',
    },
    clearButton: {
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        borderRadius: 8,
        backgroundColor: '#303030',
    },
    clearButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    button: {
        backgroundColor: '#303030',
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    movieItem: {
        padding: 15,
        backgroundColor: '#222',
        borderRadius: 8,
        marginVertical: 5,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 2 },
    },
    movieTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    }
});
