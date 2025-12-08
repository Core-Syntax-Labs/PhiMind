// src/pages/Cadastro/index.tsx

import React, { useState } from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

//cliente HTTP que fala com o backend
import { api } from '../../database/api';

import { 
  Container, 
  Title, 
  Input, 
  Button, 
  ButtonText,
  InputContainer,
  BackButton,
  BackButtonText,
  ErrorText, 
  IntroContainer,
  IntroText,
  IntroAuthor,
  QuoteIcon,
  BackButtonTextColor,
  HeaderBackButton
} from './styles';

// Tipagem dos dados que vêm do formulário
type FormData = {
  nome: string;
  email: string;
  senha: string;
  confirmarSenha: string;
};

const schema = yup.object({
  nome: yup.string().required('O nome é obrigatório'),
  email: yup
    .string()
    .email('Digite um e-mail válido')
    .required('O e-mail é obrigatório'),
  senha: yup
    .string()
    .min(6, 'A senha deve ter pelo menos 6 dígitos')
    .required('A senha é obrigatória'),
  confirmarSenha: yup
    .string()
    .oneOf([yup.ref('senha')], 'As senhas não conferem')
    .required('Confirme a sua senha'),
});

const TelaDeCadastro = () => {
  const navigation = useNavigation();

  const handleNavigateToLogin = () => {
    navigation.navigate('Login' as never);
  };

  const [loading, setLoading] = useState(false); // só pra desabilitar botão/enviar 2x

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  //AQUI É ONDE O FRONT FALA COM O BACK
  const onValidSubmit = async (data: FormData) => {
    try {
      setLoading(true);

      // 1. Mapeia os campos do formulário -> payload da API
      const payload = {
        name: data.nome,
        email: data.email,
        password: data.senha,
      };

      // 2. Chama o endpoint /register da sua API Node
      const response = await api.post('/register', payload);

      console.log('Resposta /register:', response.data);

      // 3. Feedback pro usuário
      Alert.alert('Sucesso', `Usuário ${data.nome} criado com sucesso!`);

      // 4. Volta pra tela anterior (Login)
      navigation.goBack();
    } catch (error: any) {
      console.log('Erro no cadastro:', error?.response?.data || error);

      // Erro amigável
      Alert.alert(
        'Erro no cadastro',
        error?.response?.data?.error ?? 'Não foi possível cadastrar. Tente novamente.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      {/* BOTÃO DE VOLTAR MANUAL */}
      <HeaderBackButton onPress={() => navigation.goBack()}>
        <Feather name="arrow-left" size={24} color="#6200EE" />
      </HeaderBackButton>

      {/* Introdução Cadastro */}
      <IntroContainer>
        <QuoteIcon name="quote-left" size={24} color="#6200EE" />
        <IntroText>
          "Comece agora a explorar as frases dos maiores filósofos do mundo, crie sua conta e escolha suas frases favoritas!"
        </IntroText>
        <IntroAuthor>— Equipe PhiMind</IntroAuthor>
      </IntroContainer>
      
      <Title>Crie sua conta</Title>

      {/* CAMPO NOME */}
      <InputContainer style={{ borderColor: errors.nome ? '#ff375b' : '#E0E0E0' }}>
        <Feather 
          name="user" 
          size={20} 
          color={errors.nome ? '#ff375b' : '#999'} 
          style={{ marginLeft: 15 }} 
        />
        <Controller
          control={control}
          name="nome"
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder="Digite seu nome"
              onChangeText={onChange}
              value={value}
              placeholderTextColor="#999"
            />
          )}
        />
      </InputContainer>
      {errors.nome && <ErrorText>{String(errors.nome.message)}</ErrorText>}

      {/* CAMPO EMAIL */}
      <InputContainer style={{ borderColor: errors.email ? '#ff375b' : '#E0E0E0' }}>
        <Feather 
          name="mail" 
          size={20} 
          color={errors.email ? '#ff375b' : '#999'} 
          style={{ marginLeft: 15 }}
        />
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder="Digite seu E-mail"
              onChangeText={onChange}
              value={value}
              keyboardType="email-address"
              autoCapitalize="none"
              placeholderTextColor="#999"
            />
          )}
        />
      </InputContainer>
      {errors.email && <ErrorText>{String(errors.email.message)}</ErrorText>}

      {/* CAMPO SENHA */}
      <InputContainer style={{ borderColor: errors.senha ? '#ff375b' : '#E0E0E0' }}>
        <Feather 
          name="lock" 
          size={20} 
          color={errors.senha ? '#ff375b' : '#999'} 
          style={{ marginLeft: 15 }}
        />
        <Controller
          control={control}
          name="senha"
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder="Digite sua senha"
              onChangeText={onChange}
              value={value}
              secureTextEntry={true} 
              placeholderTextColor="#999"
            />
          )}
        />
      </InputContainer>
      {errors.senha && <ErrorText>{String(errors.senha.message)}</ErrorText>}

      {/* CAMPO CONFIRMAR SENHA  */}
      <InputContainer style={{ borderColor: errors.confirmarSenha ? '#ff375b' : '#E0E0E0' }}>
        <Feather 
          name="lock" 
          size={20} 
          color={errors.confirmarSenha ? '#ff375b' : '#999'} 
          style={{ marginLeft: 15 }}
        />
        <Controller
          control={control}
          name="confirmarSenha"
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder="Confirmar Senha"
              onChangeText={onChange}
              value={value}
              secureTextEntry={true} 
              placeholderTextColor="#999"
            />
          )}
        />
      </InputContainer>
      {errors.confirmarSenha && <ErrorText>{String(errors.confirmarSenha.message)}</ErrorText>}

      <Button 
        onPress={handleSubmit(onValidSubmit)} 
        activeOpacity={0.8}
        disabled={loading}
      >
        <ButtonText>{loading ? 'Cadastrando...' : 'Cadastrar'}</ButtonText>
      </Button>

      <BackButton onPress={handleNavigateToLogin}>
        <BackButtonText>Já se cadastrou? <BackButtonTextColor>Faça o Login</BackButtonTextColor></BackButtonText>
      </BackButton>
    </Container>
  );
};

export default TelaDeCadastro;
