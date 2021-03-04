import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import styles from './styledButtonStyles';


const StyledButton = (props) => {

    // const type = props.type;
    // const content = props.content;
    // const onPress = props.onPress;
    
    const { type, content, onPress } = props;

    const backgroundColor = type === 'primary' ? '#171A20CC' : '#ffffffA6';
    const textColor = type === 'primary' ? '#ffffffA6' : '#171A20CC';

    return (
        <View style={styles.container}>
            <Pressable
                style={[styles.button, { backgroundColor: backgroundColor }]}
                onPress={() => onPress()}
            >
                <Text style={[styles.buttonText, { color: textColor }]}>{content}</Text>
            </Pressable>
        </View >
    )
}

export default StyledButton;
