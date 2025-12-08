import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #FAFAFA; /* Um branco levemente off-white é mais agradável para leitura */
  justify-content: space-between; /* Distribui os elementos na tela */
  align-items: center;
  padding: 60px 24px;
`;

export const LogoTitle = styled.Text`
  font-size: 42px;
  font-weight: 800; /* Extra bold */
  color: #6200EE;
  letter-spacing: -1px;
`;

export const Tagline = styled.Text`
  font-size: 16px;
  color: #757575;
  margin-top: -5px;
  margin-bottom: 20px;
  text-align: center;
`;

export const QuoteContainer = styled.View`
  width: 100%;
  padding: 20px;
  border-left-width: 4px;
  border-left-color: #6200EE;
  background-color: #F0F0F0;
  border-radius: 4px;
  margin-bottom: 40px;
`;

export const QuoteText = styled.Text`
  font-size: 20px;
  font-style: italic;
  color: #333;
  line-height: 28px;
  font-family: 'PlayfairDisplay_400Regular';
`;

export const QuoteAuthor = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #6200EE;
  text-align: right;
  margin-top: 10px;
`;

export const ButtonContainer = styled.View`
  width: 100%;
  gap: 16px;
`;

export const PrimaryButton = styled.TouchableOpacity`
  width: 100%;
  height: 56px;
  background-color: #6200EE;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  shadow-color: #6200EE;
  shadow-offset: 0px 4px;
  shadow-opacity: 0.3;
  shadow-radius: 4px;
  elevation: 5;
`;

export const PrimaryButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const SecondaryButton = styled.TouchableOpacity`
  width: 100%;
  height: 56px;
  background-color: transparent;
  justify-content: center;
  align-items: center;
`;

export const SecondaryButtonText = styled.Text`
  color: #6200EE;
  font-size: 16px;
  font-weight: 600;
`;