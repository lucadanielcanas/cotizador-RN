import React from 'react';
import Colors from '../Utils/Colors';
import {View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Footer = (props) => {
    
    const { calculate } = props;

    return(
        <View style={styles.viewFooter}>
            <TouchableOpacity style={styles.button} onPress={calculate}>
                <Text style={styles.text} >Calcular </Text>
            </TouchableOpacity>
        </View>        
    );
}

const styles = StyleSheet.create({
    viewFooter: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        backgroundColor: Colors.PRIMARY_COLOR,
        height: 100,
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'white',
        textAlign: 'center'  
    },
    button: {
        backgroundColor: Colors.PRIMARY_COLOR_DARK,
        padding: 16,
        borderRadius: 20,
        width: "75%",    
    }
});

export default Footer;