import styled from 'styled-components/native';
import { FontAwesome } from '@expo/vector-icons';

export const HeaderBackButton = styled.TouchableOpacity`
  position: absolute;
  top: 25px; 
  left: 20px; 
  z-index: 10; 
  
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background-color: #f5f5f5ab;
`;


//  Container para o texto de boas-vindas/citação
// Ícone de Aspas para a citação
export const QuoteIcon = styled(FontAwesome)`
  margin-bottom: 5px;
  opacity: 0.3; 
`;

export const IntroContainer = styled.View`
  width: 100%;
  margin-bottom: 20px; /* Espaço entre a frase e o Título "Crie sua conta" */
  padding: 15px;
  max-width: 350px;
  background-color: #ffffffff;
  border-radius: 12px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  max-height: 250px;
`;

//  O texto estilizado como citação
export const IntroText = styled.Text`
  font-family: 'LobsterTwo_400Regular_Italic';
  font-size: 20px;
  color: #868686ff;
  text-align: center;
  line-height: 26px; 
`;

//  A assinatura da equipe
export const IntroAuthor = styled.Text`
  font-family: 'Montserrat_700Bold';
  font-size: 14px;
  color: #6200EE;
  text-align: right; /* Alinhado à direita como uma assinatura */
  margin-top: 8px;
  
`;



export const Container = styled.View`
  flex: 1;
  background-color: #FFFFFF;
  justify-content: center;
  align-items: center;
  padding: 24px;
`;

export const Title = styled.Text`
  font-family: 'LobsterTwo_700Bold'; 
  font-size: 42px;
  font-weight: 700;
  color: #6200EE;
  margin-bottom: 20px;
  text-align: center;
  text-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
`;

export const InputContainer = styled.View`
  width: 100%;
  height: 56px;
  background-color: #F5F5F5;
  border-radius: 12px;
  flex-direction: row;
  align-items: center;
  border-width: 1px;
  border-color: #E0E0E0;
  margin-bottom: 16px;
`;

export const Input = styled.TextInput`
  flex: 1;
  height: 100%;
  padding-left: 10px;
  padding-right: 15px;
  font-size: 16px;
  color: #333;

  /* APLICAÇÃO DA FONTE: Montserrat Regular para facilitar a leitura do que é digitado */
  font-family: 'Montserrat_400Regular';

  /* CSS Hacks para remover ícones nativos */
  &::-ms-reveal { display: none; }
  &::-ms-clear { display: none; }
  &::-webkit-contacts-auto-fill-button,
  &::-webkit-credentials-auto-fill-button {
    visibility: hidden;
    display: none !important;
    pointer-events: none;
    position: absolute;
    right: 0;
  }
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
  font-family: 'Montserrat_700Bold';
  font-weight: 700;
`;

export const BackButton = styled.TouchableOpacity`
  margin-top: 24px;
  padding: 10px;
`;

export const BackButtonText = styled.Text`
  color: #666;
  font-size: 14px;
  margin-top: -10px;
  font-family: 'Montserrat_700Bold';
`;

export const BackButtonTextColor = styled.Text`
  color: #6200EE;
  font-size: 14px;
  margin-top: -10px;
  font-family: 'Montserrat_700Bold';
`;

export const ErrorText = styled.Text`
  align-self: flex-start;
  color: #ff375b;
  font-size: 12px;
  margin-bottom: 10px;
  margin-left: 5px;
  margin-top: -10px;
  font-family: 'Montserrat_400Regular';
`;