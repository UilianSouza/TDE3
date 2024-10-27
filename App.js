import React from 'react';
import { KeyboardAvoidingView, TextInput, TouchableOpacity, Text, View, Image, Platform } from 'react-native';

export default function Login() {
    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
            <Image source={require('./assets/logomarca.png')} style={styles.logo} />
            <Text style={styles.title}>OFICINA TDE 3 VANDREI
            </Text>
            <View style={styles.form}>
                <TextInput style={styles.input} placeholder="Usuário" />
                <TextInput style={styles.input} placeholder="Senha" secureTextEntry />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>ENTRAR</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#808080',
    },
    logo: {
        width: 200,
        height: 200,
        marginBottom: 20,
        padding: 10,
    },
    title: {
      fontSize: 30,
      fontWeight: 'bold',
      color: '#000000',
      marginBottom: 20,
    },
    form: {
        padding: 20,
        width: '80%',
    },
    input: {
        backgroundColor: '#fff',
        marginBottom: 10,
        padding: 10,
        borderRadius: 5,
        marginBottom: 15
    },
    button: {
        backgroundColor: '#0066cc',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 30,
    },
    buttonText: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 20,
    },
};

// TDE 3 VANDREI - CRIAÇÃO DE UMA TELA DE LOGIN - UILIAN CESAR DA SILVA DE SOUZA - RA: 537329