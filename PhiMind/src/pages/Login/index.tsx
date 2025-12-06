import React, { useState } from 'react';
import { Alert } from 'react-native';
import { 
  Container, 
  Title, 
  Input, 
  Button, 
  ButtonText,
  LinkButton,
  LinkText
} from './styles';

const TelaDeLogin = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    if (!email || !senha) {
      Alert.alert('Atenção', 'Informe seu e-mail e senha para entrar.');
      return;
    }

    // Lógica de autenticação
    console.log('Tentativa de login:', { email });
    Alert.alert('Bem-vindo', `Logado com sucesso: ${email}`);
  };

  const handleNavigateToRegister = () => {
    // Aqui você colocará a navegação real posteriormente
    console.log('Navegar para tela de cadastro');
  };

  return (
    <Container>
      <Title>Acesse sua conta</Title>

      <Input
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        placeholderTextColor="#999"
      />

      <Input
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
        placeholderTextColor="#999"
      />

      <Button onPress={handleLogin} activeOpacity={0.7}>
        <ButtonText>Entrar</ButtonText>
      </Button>

      {/* Botão para ir para a tela de Cadastro */}
      <LinkButton onPress={handleNavigateToRegister}>
        <LinkText>Não tem uma conta? Cadastre-se</LinkText>
      </LinkButton>

    </Container>
  );
};

export default TelaDeLogin;