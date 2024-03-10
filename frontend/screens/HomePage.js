import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

export default function Home() {
    return (
        <View style={styles.container}>
            <View>
                <Image
                    source={require('../assets/logo_cropped.png')} 
                    resizeMode="contain"
                />
            </View>
            <View>
                <Text style={styles.large}>HealthPath</Text>
                <Text style={styles.small}>
                    HealthPath is a pioneering accessibility map designed to guide everyone towards health and wellness locations with ease. 
                    Our app highlights accessible hospitals, clinics, pharmacies, and wellness centers, ensuring that health services are within reach for all, 
                    including those with disabilities. Navigate your health journey with HealthPath, where inclusivity leads the way to wellness.
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    large: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    small: {
        fontSize: 16,
        textAlign: 'center',
    }
});
