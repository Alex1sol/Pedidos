import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Alert, Image } from 'react-native';

export default function Pedidos(props) {
  const [pedidoAceptado, setPedidoAceptado] = useState(false);

  const aceptarPedido = () => {
    setPedidoAceptado(true);
    console.log('Pedido aceptado:', props.pedi.nombrepedido, props.pedi.nombre);
    const mensaje = `Cliente: ${props.pedi.nombre}\nPedido: ${props.pedi.nombrepedido}\nCantidad: ${props.pedi.cantidad}`;
    Alert.alert("PEDIDO ACEPTADO:", mensaje);
  }

  const rechazarPedido = (id) => {
    console.log('Pedido rechazado:',id);
    // const mensaje = `Cliente: ${props.pedi.nombre}\nPedido: ${props.pedi.nombrepedido}\nCantidad: ${props.pedi.cantidad}`;
    // Alert.alert("PEDIDO RECHAZADO:", mensaje);
    props.rechazarPedido(id);
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: props.pedi.imagen }} style={styles.image} />
      </View>
      <Text style={styles.title}>{props.pedi.nombrepedido}</Text>
      <Text style={styles.label}>Cliente: {props.pedi.nombre}</Text>
      <Text style={styles.label}>Dirección: {props.pedi.direccion}</Text>
      <Text style={styles.label}>Cantidad: {props.pedi.cantidad}</Text>
      <Button title='Aceptar' onPress={aceptarPedido} disabled={pedidoAceptado} color={pedidoAceptado ? '#CCCCCC' : '#0000FF'} />
      <Button title='Rechazar Pedido' onPress={()=>rechazarPedido(props.pedi.id)} disabled={pedidoAceptado} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    marginBottom: 14,
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#CCCCCC',
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
});
