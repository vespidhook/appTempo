import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { Ionicons } from '@expo/vector-icons';

export default function Header({ background, weather, icon}) {
    return (
        <LinearGradient
        style={styles.header}
        colors={background}        
        >            
            <Text style={styles.date}>{weather.results.date}</Text>
            <Text style={styles.city}>{weather.results.city_name}</Text>

            <Ionicons
                name={icon.name}
                color={icon.color}
                size={130}
            />

            <Text style={styles.temp}>{weather.results.temp}°</Text>
            <Text style={styles.description}>{weather.results.description}</Text>


        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '95%',
        height: '55%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8
    },

    date: {
        color: '#fff',
        fontSize: 17,
        marginTop: 20
    },

    city: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    },

    temp: {
        color: '#fff',
        fontSize: 60,
        fontWeight: 'bold'
    },

    description: {
        color: '#fff',
        fontSize: 15,
    }
});