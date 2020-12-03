import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, StatusBar, LogBox } from 'react-native';
import Form from './src/Components/Form';
import Colors from './src/Utils/Colors';

  //LogBox.ignoreAllLogs();

export default function App() {

  return(
    <>
    <StatusBar barStyle="light-content" />
    <SafeAreaView style={styles.safeArea}>
      <Text style={styles.titleApp}>Cotizador de Prestamos</Text>
      <Form />
    </SafeAreaView>

    <View>
      <Text>Info</Text>
    </View>

    <View>
      <Text>Footer</Text>
    </View>

    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: Colors.PRIMARY_COLOR,
    height: 200,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
    alignItems: "center"
  },
  titleApp: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 15,
  }
})