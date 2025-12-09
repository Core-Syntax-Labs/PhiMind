import styled from 'styled-components/native';
import { Feather, FontAwesome } from '@expo/vector-icons';
import { Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

// Título do App 
export const LogoIcon = styled(FontAwesome)`
  margin-left: 5px;
  width: 30px;
  color: "#3c048bff"
`;

export const LogoTitle = styled.Text`
  font-family: 'LobsterTwo_400Regular_Italic'; 
  font-size: 45px;
  color: #6200EE;
  text-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);

  span {
    font-size: 5px;
  }
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

// Ícone de Aspas para a citação
export const QuoteIcon = styled(FontAwesome)`
  margin-bottom: 5px;
  opacity: 0.3; 
`;

// Botões 
export const PrimaryButtonText = styled.Text`
  font-family: 'Montserrat_700Bold';
  font-weight: 700;
  color: #fff;
  font-size: 18px;
  
`;

export const Container = styled.View`
  width: 100%;
  background-color: #ffffff;
  align-items: center;
  flex: 1; 
  justify-content: center; 
  padding-bottom: 20px; 
`;

// Pega a largura total da tela do dispositivo
const { width } = Dimensions.get('window');

// container relativo para segurar a imagem e o gradiente juntos
export const HeroContainer = styled.View`
  width: ${width}px;
  height: 350px;
  margin-top: -50px;
  position: relative;
`;

export const HeroImage = styled.Image`
  width: 100%;
  height: 100%;
`;


export const BottomFade = styled(LinearGradient)`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 180px;
`;

export const TopFade = styled(LinearGradient)`
  position: absolute;
  left: 0;
  right: 0;
  top: 0; 
  height: 50px; 
  z-index: 1; 
`;

export const ContentWrapper = styled.View`
  width: 100%;
  align-items: center;
  margin-bottom: 50px;

`;

export const LogoTitleTwo = styled.Text`
  font-size: 20px;
  font-family: 'LobsterTwo_400Regular_Italic'; 
  text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
  color: #9c9c9cff;
  text-align: center;
  margin-bottom: 30px;
`;

export const QuoteContainer = styled.View`
  width: 100%;
  max-width: 350px;
  padding: 15px;
  align-items: center;
  background-color: #F9F9F9;
  border-radius: 12px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  max-height: 250px; 
`;

// Spinner de carregamento pré-estilizado
export const LoadingSpinner = styled.ActivityIndicator.attrs({
  size: 'small',
  color: '#6200EE',
})``;

export const ButtonContainer = styled.View`
  width: 100%;
  max-width: 300px;
  margin-top: -25px;
  
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

// Ícone da Seta 
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
  font-size: 14px;
  font-family: 'Montserrat_700Bold';
`;

// Ícone de Login
export const SecondaryButtonIcon = styled(Feather)`
  margin-left: 8px;
`;