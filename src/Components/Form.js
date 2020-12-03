import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Colors from '../Utils/Colors';

export default function Form() {
    return(
        <View style={styles.viewForm}>
            <View style={styles.viewInput}>
                <TextInput 
                    placeholder = "Cantidad a pedir" 
                    keyboardType = 'numeric' 
                    style = {styles.input} 
                />
                <TextInput 
                    placeholder = "Interes %" 
                    keyboardType = 'numeric'
                    style = {[styles.input, styles.inputPercentage]} 
                />
            </View>
            <RNPickerSelect
                onValueChange={(value) => console.log(value)}
                items={[
                    { label: '2 Meses', value: '2months' },
                    { label: '6 Meses', value: '6months' },
                    { label: '12 Meses', value: '12months' },
                    { label: '18 Meses', value: '18months' },
                    { label: '24 Meses', value: '24months' }
                ]}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    viewForm: {
        position: "absolute",
        bottom: -90,
        width: "85%",
        paddingHorizontal: 50,
        backgroundColor: Colors.PRIMARY_COLOR_DARK,
        borderRadius: 35,
        height: 180, 
        justifyContent: 'center',
    },
    viewInput: {
        flexDirection: 'row',
    },
    input: {
        height: 50,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: Colors.PRIMARY_COLOR,
        borderRadius: 5,
        width: '60%',
        marginRight: 5,
        marginLeft: -5,
        marginBottom: 10,
        color: '#000',
        paddingHorizontal: 20,
    },
    inputPercentage: {
        width: '40%',
        marginLeft: 5,
    }
});