import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput, Picker } from 'react-native';

function GastoHormigaScreen() {
    const [monto, setMonto] = useState('');
    const [descripcion, setDescripcion] = useState(''); // Estado para la descripción
    const [otros, setOtros] = useState(''); // Estado para el campo "otros"

    const handleAceptarIngreso = () => {
        // Lógica del gasto hormiga
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Monto</Text>
            <TextInput
                style={styles.input}
                placeholder="Ingresa el monto en pesos colombianos"
                onChangeText={(text) => setMonto(text)} // Para mostrar el teclado numérico
            />
            <Text style={styles.text}>Descripción</Text>
            <Picker // Menú desplegable para la descripción
                selectedValue={descripcion}
                onValueChange={(itemValue) => setDescripcion(itemValue)}
                style={styles.input} // Establece el mismo estilo que los campos de texto
            >
                <Picker.Item label="Transporte" value="transporte" />
                <Picker.Item label="Comida" value="comida" />
                <Picker.Item label="Otro" value="otro" />
            </Picker>
            {descripcion === 'otro' && ( // Mostrar el campo "otros" si la descripción es "otro"
                <View>
                    <Text style={styles.text}>Otro</Text>
                    <TextInput
                        style={styles.input} // Establece el mismo estilo que los campos de texto
                        placeholder="Especifica otra descripción"
                        onChangeText={(text) => setOtros(text)}
                    />
                </View>
            )}
            <Button title="Aceptar Ingreso" onPress={handleAceptarIngreso} />
        </View>
    );
}

export default GastoHormigaScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFA500',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
    },
    input: {
        width: '80%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 20,
        padding: 10,
        marginBottom: 20,
        backgroundColor: '#fff',
    },
});
