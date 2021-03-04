import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import styles from './styles';


const CarItem = () => {
    return (
        <View style={styles.carContainer}>

            <ImageBackground
                source={require('../../assets/images/ModelS.jpeg')}
                style={styles.image}
            />

            <View style={styles.titles}>
                <Text style={styles.title}>Model S</Text>
                <Text style={styles.subTitle}>Price: starting at $69,420</Text>
            </View>

        </View>
    )
}

export default CarItem;
