import React from 'react';
import { View, StyleSheet,Scropp } from 'react-native';
import Card from '../component/placeInfo';

export default function Fav() {
    return (
        <View style={styles.container}>
            {/* TODO: scroll view + add button */}
            <Card />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
});
