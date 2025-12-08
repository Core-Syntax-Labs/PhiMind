import styled from "styled-components/native";

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
  background-color: #bb86fca4;
`;



export const Container = styled.View`
  flex: 1;
  background-color: #050516;
  padding: 80px 24px 0 24px;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 20px;
  font-family: Montserrat_700Bold;
  margin-bottom: 16px;
`;

export const Card = styled.View`
  background-color: #12122a;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 12px;
`;

export const TextPT = styled.Text`
  color: #ede7f6;
  font-size: 14px;
  margin-bottom: 8px;
`;

export const Author = styled.Text`
  color: #bb86fc;
  font-size: 13px;
  text-align: right;
`;

export const RemoveButton = styled.TouchableOpacity`
  margin-top: 10px;
  align-self: flex-end;
  padding: 6px 12px;
  border-radius: 999px;
  border-width: 1px;
  border-color: #cf6679;
`;

export const RemoveText = styled.Text`
  color: #cf6679;
  font-size: 12px;
`;
