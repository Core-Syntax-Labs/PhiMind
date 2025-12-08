import React from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { 
  Container, 
  Title, 
  Input, 
  Button, 
  ButtonText,
  InputContainer,
  BackButton,
  BackButtonText,
  ErrorText 
} from './styles';

const schema = yup.object({
  nome: yup.string().required('O nome é obrigatório'),
  email: yup.string().email('Digite um e-mail válido').required('O e-mail é obrigatório'),
  senha: yup.string().min(6, 'A senha deve ter pelo menos 6 dígitos').required('A senha é obrigatória'),
  confirmarSenha: yup.string()
    .oneOf([yup.ref('senha')], 'As senhas não conferem')
    .required('Confirme a sua senha'),
});

const TelaDeCadastro = () => {
  const navigation = useNavigation();
  
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onValidSubmit = (data: any) => {
    console.log('Dados Validados:', data);
    Alert.alert('Sucesso', `Usuário ${data.nome} criado com sucesso!`);
    navigation.goBack();
  };

  return (
    <Container>
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

      <Button onPress={handleSubmit(onValidSubmit)} activeOpacity={0.8}>
        <ButtonText>Cadastrar</ButtonText>
      </Button>

      <BackButton onPress={() => navigation.goBack()}>
        <BackButtonText>Já se cadastrou? Faça o Login</BackButtonText>
      </BackButton>

    </Container>
  );
};

export default TelaDeCadastro;