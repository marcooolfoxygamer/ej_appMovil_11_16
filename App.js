import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Pressable, Modal } from 'react-native';
import Formulario from './src/components/Formulario';

export default function App() {
  
  const [modalVisible, setModalVisible] = useState(false)
  console.log(modalVisible)

  // setTimeout(() => {
  //   setModalVisible(true)
  // }, 3000);

  const nuevaCita = () => {
    console.log("Presionaste el boton")
  }
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Administrador de Citas <Text style={styles.tituloBold}>Veterinaria</Text>
      </Text>
      <Pressable
        style={styles.btnnuevacita}
        // onPress={nuevaCita}>
        onPress={()=>setModalVisible(!modalVisible)}>
        <Text style={styles.btntextnuevascitas}>Nueva cita</Text>
      </Pressable>
      <Formulario
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f3f4f6',
    flex: 1,
    paddingHorizontal: 8,
    paddingBottom: 8,
    paddingTop: 50,
  },
  titulo: {
    margin: 24,
    fontSize: 40,
    textTransform: 'uppercase',
    fontWeight: '600',
    color: '#374151',
    textAlign: 'center',
  },
  tituloBold: {
    fontWeight: '900',
    color: '#6D28D9',
  },
  btnnuevacita: {
    backgroundColor: '#6D28D9',
    padding: 15,
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10,
  },
  btntextnuevascitas: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
});
