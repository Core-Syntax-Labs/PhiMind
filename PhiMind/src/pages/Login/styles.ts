import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #f5f5f5;
`;

export const Title = styled.Text`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 30px;
  color: #333;
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 50px;
  background-color: #fff;
  border-radius: 8px;
  padding: 0 15px;
  font-size: 16px;
  border-width: 1px;
  border-color: #ddd;
  margin-bottom: 15px;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  background-color: #6200EE;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

// Novos estilos específicos para o Login (Link de criar conta)
export const LinkButton = styled.TouchableOpacity`
  margin-top: 20px;
  padding: 10px;
`;

export const LinkText = styled.Text`
  color: #6200EE;
  font-size: 16px;
  font-weight: 500;
`;