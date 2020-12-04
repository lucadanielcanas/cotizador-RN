import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Colors from '../Utils/Colors';

export default function Form(props) {

    const {setAmount, setInterest, setMonths} = props;

    return(
        <View style={styles.viewForm}>
            <View style={styles.viewInput}>
                <TextInput 
                    placeholder = "Cantidad a pedir" 
                    keyboardType = 'numeric' 
                    style = {styles.input} 
                    onChange={e => setAmount(e.nativeEvent.text)}
                />
                <TextInput 
                    placeholder = "Interes %" 
                    keyboardType = 'numeric'
                    style = {[styles.input, styles.inputPercentage]} 
                    onChange={e => setInterest(e.nativeEvent.text)}
                />
            </View>
            <RNPickerSelect
                style={pickerSelectStyle}
                onValueChange={(value) => setMonths(value)}
                placeholder={{
                    label: 'Selecciona los plazos...',
                    value: null
                }}
                items={[
                    { label: '3 Meses', value: 3 },
                    { label: '6 Meses', value: 6 },
                    { label: '12 Meses', value: 12 },
                    { label: '24 Meses', value: 24 },
                ]}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    viewForm: {
        position: "absolute",
        bottom: 0,
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

const pickerSelectStyle = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 4,
        color: 'black',
        paddingRight: 30,
        backgroundColor: 'white',
        marginLeft: -5,
        marginRight: -5
    },
    inputANDROID: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: 'grey',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30,
        backgroundColor: 'white',
    }
});