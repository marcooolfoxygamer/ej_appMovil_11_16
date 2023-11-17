import React, { useState, useEffect } from 'react';
import {Modal, Text, Button, StyleSheet, View, TextInput, ScrollView, Pressable, TouchableOpacity} from 'react-native';
// import DatePicker from 'react-native-date-picker';
import DateTimePicker from 'react-native-ui-datepicker';

const Formulario = ({modalVisible, setModalVisible}) => {

  const [paciente, setPaciente] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [fecha, setFecha] = useState(new Date());
  const [sintomas, setSintomas] = useState('');
  
  const [errores, setErrores] = useState({});
  const [isFormValid, setIsFormValid] = useState(true);


//   useEffect(() => {
//     validateForm();
//   }, [paciente, propietario, email, telefono, fecha, sintomas]);

  const validateForm = () => {
    let errores = {};

    // Validación campo Nombre del paciente
    if (!paciente) {
        errores.paciente = 'El nombre del paciente es obligatorio.';
    }

    // Validación campo Nombre del propietario
    if (!propietario) {
        errores.propietario = 'El nombre del propietario es obligatorio.';
    }

    // Validación campo Email del propietario
    if (!email) {
        errores.email = 'El correo electrónico del propietario es obligatorio.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        errores.email = 'La dirección de correo electrónico digitada es inválida';
    }

    // Validación campo Teléfono del propietario
    if (!telefono) {
        errores.telefono = 'El teléfono del propietario es obligatorio.';
    }

    // Validación campo Fecha Alta
    if (!fecha) {
        errores.fecha = 'La fecha de alta es obligatoria.';
    }

    // Validación campo Sintomas del paciente
    if (!sintomas) {
        errores.sintomas = 'Los sintomas del paciente deben ser descritos';
    }

    setErrores(errores);
    setIsFormValid(Object.keys(errores).length === 0);

  }

  const handleSubmit = () => {

    // console.log(isFormValid);
    // if (isFormValid) {
    //     console.log('¡Se completó el registro satisfactoriamente!');
    //     alert("agregó")
    // } else {
    //     console.log('El formulario contiene errores. Por favor, corríjalos');
    //     validateForm();
    // }


    if (Object.keys(errores).length === 0) {
        if (isFormValid) {
            console.log('¡Se completó el registro satisfactoriamente!');
            alert("¡Se completó el registro satisfactoriamente!")
        }
        else {
            console.log('El formulario contiene errores. Por favor, corríjalos');
            validateForm();
        }
    } else {
        console.log('El formulario contiene errores. Por favor, corríjalos');
        validateForm();
    }

  }

//   const displayError = (campo) => {
//     let campo_e = errores.campo;
//     return <Text style={styles.error}>{errores.campo_e}</Text>
//   }

  return (
    <Modal animationType='slide' visible={modalVisible}>
        <View style={styles.contenido}>
            <ScrollView>
                <Text style={styles.titulo}> Nueva {''}
                    <Text style={styles.tituloBold}>Cita</Text>
                </Text>

                {/* Creacion botón para cerrar el modal */}
                <Pressable 
                    style={styles.btnCancelar}
                    onLongPress={() => setModalVisible(!modalVisible)}>
                    <Text style={styles.btnCancelarTexto}>X Cancelar</Text>
                </Pressable>

                <View style={styles.campo}>
                    <Text style={styles.label}>Nombre Paciente</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Nombre del Paciente'
                        placeholderTextColor={'#666'}
                        value={paciente}
                        onChangeText={setPaciente}
                    />
                    <View style={styles.error}>
                        <Text style={styles.errorText}>{errores.paciente}</Text>
                    </View>
                </View>
                <View style={styles.campo}>
                    <Text style={styles.label}>Nombre Propietario</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Nombre del Propietario'
                        placeholderTextColor={'#666'}
                        value={propietario}
                        onChangeText={setPropietario}/>
                    <View style={styles.error}>
                        <Text style={styles.errorText}>{errores.propietario}</Text>
                    </View>
                </View>
                <View style={styles.campo}>
                    <Text style={styles.label}>Email Propietario</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='email'
                        placeholderTextColor={'#666'}
                        keyboardType='email-address'
                        value={email}
                        onChangeText={setEmail}/>
                    <View style={styles.error}>
                        <Text style={styles.errorText}>{errores.email}</Text>
                    </View>
                </View>
                <View style={styles.campo}>
                    <Text style={styles.label}>Telefono Propietario</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Telefono del Propietario'
                        placeholderTextColor={'#666'}
                        keyboardType='number-pad'
                        value={telefono}
                        onChangeText={setTelefono}
                        maxLength={10}/>
                    <View style={styles.error}>
                        <Text style={styles.errorText}>{errores.telefono}</Text>
                    </View>
                </View>
                <View style={styles.campo}>
                    <Text style={styles.label}>Fecha Alta</Text>
                    <View style={styles.fechacontenedor}>
                        <DateTimePicker
                            date={fecha}
                            locale='es' //español
                            mode="date"
                            onValueChange={(date)=>setFecha(date)} //para seleccionar la fecha
                        />
                    </View>
                    <View style={styles.error}>
                        <Text style={styles.errorText}>{errores.fecha}</Text>
                    </View>
                </View>
                <View style={styles.campo}>
                    <Text style={styles.label}>Sintomas</Text>
                    <TextInput
                        style={[styles.input, styles.sintomasInput]}
                        placeholder='Sintomas Paciente'
                        placeholderTextColor={'#666'}
                        value={sintomas}
                        onChangeText={setSintomas}
                        multiline={true}
                        numberOfLines={4}/>
                    <View style={styles.error}>
                        <Text style={styles.errorText}>{errores.sintomas}</Text>
                    </View>
                </View>

                {/* Creación del botón para agregar cita */}
                
                <Pressable
                    style={styles.btnNuevaCita}
                    onPressIn={validateForm}
                    onPressOut={handleSubmit}
                >
                    <Text style={styles.btnNuevaCitaTexto}>Agregar Paciente</Text>
                </Pressable>


                {/* <TouchableOpacity
                    style={[styles.btnNuevaCita, {opacity: isFormValid ? 1 : 0.5}]}
                    // disabled={!isFormValid}
                    onPress={handleSubmit}
                >
                    <Text style={styles.btnNuevaCitaTexto}>Agregar Paciente</Text>
                </TouchableOpacity> */}

                {/* Mostrar mensajes de error */}
                {/* {Object.values(errores).map((error, index) => (
                    <Text key={index} style={styles.error}>
                        {error}{index}
                    </Text>
                ))} */}


            </ScrollView>
        </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
    contenido: {
      backgroundColor: '#6D28D9',
      flex: 1,
    },
    titulo: {
      fontSize: 30,
      fontWeight: '600',
      textAlign: 'center',
      marginTop: 30,
      color: '#fff',
    },
    tituloBold: {
      fontWeight: '900',
    },
    btnCancelar: {
        marginVertical: 30,
        backgroundColor: '#5827A4',
        marginHorizontal: 30,
        padding: 15,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#FFF',
    },
    btnCancelarTexto: {
        color: '#FFF',
        textAlign: "center",
        fontWeight: '900',
        fontSize: 16,
        textTransform: 'uppercase',
    },
    campo: {
        marginTop: 10,
        marginHorizontal: 30,
    },
    label: {
        color: '#FFF',
        marginBottom: 10,
        marginTop: 15,
        fontSize: 20,
        fontWeight: '600',
    },
    input: {
        backgroundColor: '#FFF',
        padding:15,
        borderRadius: 10,
    },
    sintomasInput: {
        height: 100,
    },
    fechacontenedor: {
        backgroundColor: '#FFF',
        borderRadius: 10,
    },
    btnNuevaCita: {
        marginVertical: 50,
        backgroundColor: '#F59E0B',
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 10,
    },
    btnNuevaCitaTexto: {
        textAlign: 'center',
        color: '#5827A4',
        textTransform: 'uppercase',
        fontWeight: '900',
        fontSize: 16,
    },
    error: {
        marginTop: 10,
        marginLeft: 10,
    },
    errorText: {
        color: 'red',
        fontSize: 15,
        // margin: 12,
    }
});

export default Formulario
