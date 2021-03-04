import React from 'react';
import { Dimensions, FlatList, Text, View } from 'react-native';
import cars from './cars';
import styles from './carListStyles';
import CarItem from '../CarItem/carItem';

const CarList = () => {
    console.log(cars)
    return (
        <View style={styles.container}>

            <FlatList
                data={cars}
                renderItem={({ item }) => <CarItem car={item} />}
                showsHorizontalScrollIndicator={false}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('window').height}
            />

        </View>
    )
}

export default CarList;