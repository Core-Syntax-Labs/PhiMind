import React, { useState } from 'react';
import { Alert } from 'react-native';
import { 
  Container, 
  Title, 
  Input, 
  Button, 
  ButtonText 
} from './styles';

const TelaDeCadastro = () => {
  // 1. Hooks de Estado
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  // 2. Função de cadastro
  const handleCadastro = () => {
    if (!nome || !email || !senha) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    console.log('Dados para cadastro:', { nome, email, senha });
    Alert.alert('Sucesso', `Usuário ${nome} cadastrado com o e-mail: ${email}`);

    setNome('');
    setEmail('');
    setSenha('');
  };

  return (
    <Container>
      <Title>Crie sua conta</Title>

      {/* Input Nome */}
      <Input
        placeholder="Nome Completo"
        value={nome}
        onChangeText={setNome}
        placeholderTextColor="#999" // Boa prática adicionar cor ao placeholder
      />

      {/* Input E-mail */}
      <Input
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        placeholderTextColor="#999"
      />

      {/* Input Senha */}
      <Input
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
        placeholderTextColor="#999"
      />

      {/* Botão de Cadastro */}
      <Button onPress={handleCadastro} activeOpacity={0.7}>
        <ButtonText>Cadastrar</ButtonText>
      </Button>
    </Container>
  );
};

export default TelaDeCadastro;