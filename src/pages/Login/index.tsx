import React, { useState } from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons'; 

import { 
  Container, 
  Title, 
  Input, 
  Button, 
  ButtonText,
  LinkButton,
  LinkText,
  InputContainer
} from './styles';

const TelaDeLogin = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    if (!email || !senha) {
      Alert.alert('Atenção', 'Preencha todos os campos.');
      return;
    }
    console.log('Login com:', { email });
    Alert.alert('Bem-vindo', `Logado com sucesso!`);
  };

  const handleNavigateToRegister = () => {
    navigation.navigate('Cadastro' as never);
  };

  return (
    <Container>
      <Title>Entre agora</Title>

      {/* Input de E-mail */}
      <InputContainer>
        {/* Ícone vem PRIMEIRO agora */}
        <Feather 
          name="mail" 
          size={20} 
          color="#999" 
          style={{ marginLeft: 15 }} // Margem para afastar da borda esquerda
        />
        <Input
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          placeholderTextColor="#999"
        />
      </InputContainer>

      {/* Input de Senha  */}
      <InputContainer>
        <Feather 
          name="lock" 
          size={20} 
          color="#999" 
          style={{ marginLeft: 15 }} 
        />
        <Input
          placeholder="Senha"
          value={senha}
          onChangeText={setSenha}
          placeholderTextColor="#999"
          secureTextEntry={true} // Sempre oculto, sem botão de olho
        />
      </InputContainer>

      <Button onPress={handleLogin} activeOpacity={0.8}>
        <ButtonText>Entrar</ButtonText>
      </Button>

      <LinkButton onPress={handleNavigateToRegister}>
        <LinkText>Não tem uma conta? Cadastre-se</LinkText>
      </LinkButton>

    </Container>
  );
};

export default TelaDeLogin;