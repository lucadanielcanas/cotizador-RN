import React, {useState, useEffect} from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  SafeAreaView, 
  StatusBar, 
  LogBox } from 'react-native';
import Form from './src/Components/Form';
import ResultCalculation from './src/Components/ResultCalculation';
import Footer  from './src/Components/Footer';
import Colors from './src/Utils/Colors';

  LogBox.ignoreAllLogs();

const App = () => {

  const [amount, setAmount] = useState(null);
  const [interest, setInterest] = useState(null);
  const [months, setMonths] = useState(null);
  const [total, setTotal] = useState(null);
  const [errorLog, setErrorLog] = useState('');

  useEffect(() => {
    if(amount && interest && months) calculate();
    else reset();
  }, [amount, interest, months]);

  const calculate = () => {
    reset();
    if(!amount) {
      setErrorLog("Agrega un monto válido.");
    }
    else if(!interest) {
      setErrorLog("Ingrese el interes del prestamo.");
    }
    else if(!months) {
      setErrorLog("Seleccione los meses a pagar.");
    } else {
        const i = interest / 100;
        const fee = amount / ((1 - Math.pow(i + 1, -months)) / i);
        setTotal({
          monthlyFee: fee.toFixed(2).replace('.', ','),
          totalPayable: (fee * months).toFixed(2).replace('.', ',')
        });
    }
  }

  const reset = () => {
    setErrorLog("");
    setTotal(null);
  }

  return(
    <>
    <StatusBar barStyle="light-content" />
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.background}/>
      <Text style={styles.titleApp}>
        Cotizador de Prestamos
      </Text>
      <Form 
        setAmount={setAmount} 
        setInterest={setInterest} 
        setMonths={setMonths}/>
    </SafeAreaView>
    <ResultCalculation 
      amount={amount}
      interest={interest}
      months={months}
      total={total}
      errorLog={errorLog}/>
    <Footer calculate={calculate}/>

    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    height: 290,
    alignItems: "center"
  },
  background: {
    backgroundColor: Colors.PRIMARY_COLOR,
    height: 200,
    width: "100%",
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
    position: 'absolute',
    zIndex: -1
  },
  titleApp: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 15,
  }
});

export default App;