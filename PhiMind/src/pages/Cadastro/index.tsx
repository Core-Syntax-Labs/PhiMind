import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert // Usado para exibir mensagens de cadastro
} from 'react-native';

import { styles } from './styles';

const TelaDeCadastro = () => {
  // 1. Hooks de Estado para os campos
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  // 2. Função para lidar com o cadastro
  const handleCadastro = () => {
    if (!nome || !email || !senha) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    // Simulação da lógica de cadastro
    console.log('Dados para cadastro:', { nome, email, senha });
    Alert.alert('Sucesso', `Usuário ${nome} cadastrado com o e-mail: ${email}`);

    // Limpar os campos após o cadastro
    setNome('');
    setEmail('');
    setSenha('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crie sua conta</Text>

      {/* Input Nome */}
      <TextInput
        style={styles.input}
        placeholder="Nome Completo"
        value={nome}
        onChangeText={setNome}
      />

      {/* Input E-mail */}
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address" // Teclado otimizado para e-mail
        autoCapitalize="none" // Desabilita a capitalização automática
      />

      {/* Input Senha */}
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry // Oculta o texto digitado
      />

      {/* Botão de Cadastro */}
      <TouchableOpacity
        style={styles.button}
        onPress={handleCadastro}
      >
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
};


export default TelaDeCadastro