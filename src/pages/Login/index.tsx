// src/pages/Login/index.tsx

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

//Pega o contexto de autenticação
import { useAuth } from '../../context/AuthContext';

const TelaDeLogin = () => {
  const navigation = useNavigation();

  const { signIn, loading } = useAuth(); //função que chama /login no back

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = async () => {
    if (!email || !senha) {
      Alert.alert('Atenção', 'Preencha todos os campos.');
      return;
    }

    try {
      //AQUI é onde o front aciona o back (via AuthContext)
      await signIn(email, senha);

      // Se chegar aqui sem erro:
      // - AuthContext já preencheu "user"
      // - TaskRoutes vai re-renderizar e mostrar o stack logado (Quote/Favorites)
      // Não precisa dar navigate manual pra Home/Quote aqui.
    } catch (error: any) {
      console.log(error?.response?.data || error);

      Alert.alert(
        'Erro no login',
        error?.response?.data?.error ?? 'Verifique suas credenciais.'
      );
    }
  };

  const handleNavigateToRegister = () => {
    navigation.navigate('Cadastro' as never);
  };

  return (
    <Container>
      <Title>Entre agora</Title>

      {/* Input de E-mail */}
      <InputContainer>
        <Feather 
          name="mail" 
          size={20} 
          color="#999" 
          style={{ marginLeft: 15 }}
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
          secureTextEntry={true}
        />
      </InputContainer>

      <Button onPress={handleLogin} activeOpacity={0.8} disabled={loading}>
        <ButtonText>{loading ? 'Entrando...' : 'Entrar'}</ButtonText>
      </Button>

      <LinkButton onPress={handleNavigateToRegister}>
        <LinkText>Não tem uma conta? Cadastre-se</LinkText>
      </LinkButton>

    </Container>
  );
};

export default TelaDeLogin;
