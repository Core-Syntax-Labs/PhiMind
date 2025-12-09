import styled from 'styled-components/native';

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
  background-color: #fcfcfca4;
`;



export const Container = styled.View`
  flex: 1;
  background-color: #440591a4;
  padding: 24px;
  padding-top: 60px; /* Espaço para o HeaderBackButton */
`;



// Container para alinhar Título e Ícone lado a lado
export const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 30px;
  margin-top: 20px;
`;

export const Title = styled.Text`
  font-family: 'LobsterTwo_700Bold'; 
  font-size: 38px;
  color: #ffffffff;
  text-align: center;
`;

// Estilo do Cartão da Frase
export const Card = styled.View`
  background-color: #ffffffff;
  width: 100%;
  padding: 20px;
  margin-bottom: 15px;
  border-radius: 16px;
  
  /* Sombra suave */
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.1;
  shadow-radius: 4px;
  elevation: 3;
  border: 1px solid #EAEAEA;
`;

export const TextPT = styled.Text`
  font-family: 'LobsterTwo_400Regular_Italic'; 
  font-size: 20px;
  color: #7a7878ff;
  line-height: 26px;
  margin-bottom: 10px;
`;

export const Author = styled.Text`
  font-family: 'Montserrat_700Bold';
  font-size: 14px;
  color: #6200EE;
  text-align: right;
  margin-bottom: 15px;
`;

// Botão de Remover (Estilizado com Flex Row para ícone)
export const RemoveButton = styled.TouchableOpacity`
  flex-direction: row; /* alinhar ícone e texto */
  align-items: center;
  justify-content: center;
  background-color: #FFF0F3; 
  padding: 10px;
  border-radius: 8px;
  align-self: flex-end; /* Joga o botão para a direita */
`;

export const RemoveText = styled.Text`
  color: #FF375B;
  font-family: 'Montserrat_700Bold';
  font-size: 14px;
`;