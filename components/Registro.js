import React, { useState } from 'react';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { View, Text, StyleSheet, TextInput, Button,ScrollView } from 'react-native';

export default function Registro() {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
  
    const showDatePicker = () => {
      setDatePickerVisibility(true);
    };
  
    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };
  
    const handleDateConfirm = (date) => {
      console.warn("A date has been picked: ", date);
      setSelectedDate(date);
      hideDatePicker();
    };
  
    const showTimePicker = () => {
      setTimePickerVisibility(true);
    };
  
    const hideTimePicker = () => {
      setTimePickerVisibility(false);
    };
  
    const handleTimeConfirm = (time) => {
      console.warn("A time has been picked: ", time);
      setSelectedTime(time);
      hideTimePicker();
    }
  const handleSubmit = () => {
    // Validar los datos del formulario antes de enviarlos
    // if (!nombrePedido || !nombreCliente || !direccion || !cantidad) {
    //   alert('Por favor complete todos los campos.');
    //   return;
    // }

    // Llamar a la función de registro con los datos del formulario
    console.log("Error en");

  };

  return (
    <ScrollView>

    <View style={styles.container}>
    <Text style={styles.label}>Nombre del Pedido:</Text>
    <TextInput
      style={styles.input}
      />
    <Text style={styles.label}>Nombre del Cliente:</Text>
    <TextInput
      style={styles.input}
      />
    <Text style={styles.label}>Dirección:</Text>
    <TextInput
      style={styles.input}
      />
    <Text style={styles.label}>Cantidad:</Text>
    <TextInput
      style={styles.input}
      keyboardType="numeric"
      />
    <Button title="Registrar Pedido" onPress={handleSubmit} />
    
  </View>
  <Button title="Seleccionar Fecha" onPress={showDatePicker} />
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleDateConfirm}
          onCancel={hideDatePicker}
          cancelTextAndroid='Cancelar operación'
          />
      </ScrollView>
);
}
const styles = StyleSheet.create({
    container: {
      padding: 20,
    },
    label: {
      fontSize: 18,
      marginBottom: 5,
    },
    input: {
      borderWidth: 1,
      borderColor: '#CCCCCC',
      borderRadius: 5,
      padding: 10,
      marginBottom: 10,
    },
  });