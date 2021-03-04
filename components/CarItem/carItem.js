import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import StyledButton from '../styledButton/styledButton';
import styles from './styles';


const CarItem = (props) => {

    const { name, tagline, taglineCTA, image } = props;

    return (
        <View style={styles.carContainer}>

            <ImageBackground
                source={image}
                style={styles.image}
            />

            <View style={styles.titles}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subTitle}>{tagline}{' '}
                    <Text style={styles.subTitleCTA}>{taglineCTA}</Text>
                </Text>
            </View>

            <View style={styles.buttonContainer}>
                <StyledButton
                    type='primary'
                    content={'Custom Order'}
                    onPress={() => {
                        console.warn('Custom Order was pressed')
                    }}
                />
                <StyledButton
                    type='scondary'
                    content={'Existing Inventory'}
                    onPress={() => {
                        console.warn('Existing Inventory was pressed')
                    }}
                />
            </View>

        </View>
    )
}

export default CarItem;
