import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #FFFFFF;
  justify-content: center;
  align-items: center;
  padding: 24px;
`;

export const Title = styled.Text`
  font-size: 32px;
  font-weight: 800;
  color: #6200EE;
  margin-bottom: 40px;
  text-align: center;
`;

export const InputContainer = styled.View`
  width: 100%;
  height: 56px;
  background-color: #F5F5F5;
  border-radius: 12px;
  flex-direction: row; /* Mantém lado a lado */
  align-items: center; 
  border-width: 1px;
  border-color: #E0E0E0;
  margin-bottom: 16px;
  /* Removemos o padding-right antigo */
`;

export const Input = styled.TextInput`
  flex: 1; /* Ocupa todo o espaço restante */
  height: 100%;
  padding-left: 10px; /* Pequeno espaçamento entre o ícone e o texto */
  padding-right: 15px; /* Espaço na direita para o texto não colar na borda */
  font-size: 16px;
  color: #333;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  height: 60px;
  background-color: #6200EE;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  shadow-color: #6200EE;
  shadow-offset: 0px 4px;
  shadow-opacity: 0.3;
  shadow-radius: 8px;
  elevation: 6;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

export const LinkButton = styled.TouchableOpacity`
  margin-top: 24px;
  padding: 10px;
`;

export const LinkText = styled.Text`
  color: #6200EE;
  font-size: 16px;
  font-weight: 600;
`;