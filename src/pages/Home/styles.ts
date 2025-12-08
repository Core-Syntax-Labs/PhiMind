import styled from 'styled-components/native';
import { Feather, FontAwesome } from '@expo/vector-icons'; // Adicionei FontAwesome
import { Dimensions } from 'react-native';

// Título do App 
export const LogoTitle = styled.Text`
  font-family: 'Montserrat_700Bold'; 
  font-size: 40px;
  color: #6200EE;
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
`;

// Frase Filosófica
export const QuoteText = styled.Text`
  font-family: 'LobsterTwo_400Regular_Italic'; 
  font-size: 20px; 
  color: #333;
  text-align: center;
  margin-top: 10px;
`;

export const QuoteAuthor = styled.Text`
  font-family: 'Montserrat_700Bold';
  font-size: 14px;
  color: #6200EE;
  margin-top: 8px;
`;

// NOVO: Ícone de Aspas para a citação
export const QuoteIcon = styled(FontAwesome)`
  margin-bottom: 5px;
  opacity: 0.3; /* Deixa suave */
`;

// Botões 
export const PrimaryButtonText = styled.Text`
  font-family: 'Montserrat_700Bold';
  font-weight: 700;
  color: #fff;
  font-size: 18px;
`;

export const Container = styled.View`
  flex: 1;
  background-color: #FFFFFF;
  justify-content: space-between;
  align-items: center;
  padding: 40px 24px;
`;

// Pega a largura total da tela do dispositivo
const { width } = Dimensions.get('window');

export const HeroImage = styled.Image`
  width: ${width}px; 
  height: 350px;
  margin-top: -50;
`;

export const ContentWrapper = styled.View`
  width: 100%;
  align-items: center;
  margin-bottom: 20px;
`;

export const LogoTitleTwo = styled.Text`
  font-size: 20px;
  font-family: 'Montserrat_700Bold'; 
  font-weight: 400;
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  color: #818080ff;
  text-align: center;
  margin-bottom: 16px;
`;

export const QuoteContainer = styled.View`
  width: 100%;
  padding: 15px;
  align-items: center;
  background-color: #F9F9F9; /* Fundo sutil para destacar a frase */
  border-radius: 12px;
`;

// Spinner de carregamento pré-estilizado
export const LoadingSpinner = styled.ActivityIndicator.attrs({
  size: 'small',
  color: '#6200EE',
})``;

export const ButtonContainer = styled.View`
  width: 100%;
  gap: 15px;
  margin-bottom: 20px;
`;

export const PrimaryButton = styled.TouchableOpacity`
  width: 100%;
  height: 60px;
  background-color: #6200EE;
  border-radius: 30px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  shadow-color: #6200EE;
  shadow-offset: 0px 4px;
  shadow-opacity: 0.3;
  shadow-radius: 8px;
  elevation: 6;
`;

// Ícone da Seta (Botão Primário)
export const ButtonIcon = styled(Feather)`
  margin-left: 10px;
`;

export const SecondaryButton = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  flex-direction: row; /* Para alinhar texto e ícone */
  justify-content: center;
  align-items: center;
`;

export const SecondaryButtonText = styled.Text`
  color: #1A1A1A;
  font-size: 16px;
  font-family: 'Montserrat_700Bold';
`;

// NOVO: Ícone de Login (Botão Secundário)
export const SecondaryButtonIcon = styled(Feather)`
  margin-left: 8px;
`;