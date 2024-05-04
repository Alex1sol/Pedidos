import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import Pedido from './components/Pedido';
import Registro from './components/Registro';
import { StyleSheet, Text, View, FlatList, Image, ScrollView } from 'react-native';

export default function App() {
  // Estado de los pedidos
  const [pedidos, setPedidos] = useState([
    {id:1,nombre:"Alex Leones",nombrepedido:"Pizza",direccion:"Junto al hotel pan",cantidad:2,
    imagen:"https://underpizza-image-storage.s3.us-east-2.amazonaws.com/sides/dEcc48jAvLAM5t2KY/0.webp"},
    {id:2,nombre:"Marisol Vera",nombrepedido:"Hamburguesa",direccion:"Via nueva", cantidad:4,
    imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfmrZVfXKtOxab8M4mLIhcUg13n-mPKM0IaA&usqp=CAU"
    },
    {id:3,nombre:"Lucas Oil",nombrepedido:"Pan y café",direccion:"Av. Hotel", cantidad:1,
    imagen:"https://images.rappi.com.ec/rests_taxonomy/4ae39314-0988-4d16-b558-d65d57924444.png?e=webp&q=10&d=10x10"
    },
    {id:4,nombre:"Luis Velez",nombrepedido:"Pollo",direccion:"Barrio nuevo", cantidad:2,
    imagen:"https://images.rappi.com.ec/rests_taxonomy/dd606f3c-2f25-4ba0-93ec-91cff90d5423.png?e=webp"
    },
    {id:5,nombre:"Carmen Zambrano",nombrepedido:"Desayuno",direccion:"Av. Nueva esperanza", cantidad:4,
    imagen:"https://images.rappi.com.ec/rests_taxonomy/6fca9305-0678-4c3c-9417-f4cabd9df445.png?e=webp"
    },
    {id:6,nombre:"Veronica Delgado",nombrepedido:"Ceviche",direccion:"Av. Quito", cantidad:2,
    imagen:"https://images.rappi.com.ec/rests_taxonomy/6.ceviche.png?e=webp&q=10&d=10x10"
    }
  ]);

  const rechazarPedido = (id) => {
    setPedidos((pedidosactuales) => {
      return pedidosactuales.filter(pedi => pedi.id !== id)
    });
  }

  const RegistroPedido = (nuevoPedido) => {
    setPedidos([...pedidos, nuevoPedido]);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>LISTA DE PEDIDOS</Text>
      <FlatList
        data={pedidos}
        renderItem={({item}) => <Pedido pedi={item} rechazarPedido={rechazarPedido}/> }
        keyExtractor={(item) => item.id.toString()}
      />
      <Registro nuevoRegistro={RegistroPedido} />
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fe9d3a',
  },
  titulo: {
    fontSize: 24,
    marginTop: 60,
    fontWeight: "bold",
    color: '#fefffe',
    marginBottom: 20, 
  }
});
