import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #440591a4;
  padding: 80px 24px 0 24px;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 20px;
  font-family: Montserrat_700Bold;
  margin-bottom: 16px;
`;

export const QuoteCard = styled.View`
  background-color: #12122a;
  border-radius: 16px;
  padding: 20px;
  margin-bottom: 24px;
`;

export const QuotePT = styled.Text`
  color: #ede7f6;
  font-size: 16px;
  line-height: 22px;
  margin-bottom: 8px;
`;

export const QuoteEN = styled.Text`
  color: #9fa8da;
  font-size: 13px;
  font-style: italic;
  margin-top: 4px;
`;

export const Author = styled.Text`
  color: #bb86fc;
  font-size: 14px;
  text-align: right;
  margin-top: 16px;
`;

export const Source = styled.Text`
  color: #666;
  font-size: 11px;
  text-align: right;
  margin-top: 4px;
`;

export const Button = styled.TouchableOpacity`
  background-color: #3700b3;
  border-radius: 999px;
  padding: 14px;
  align-items: center;
  margin-bottom: 12px;
`;

export const ButtonText = styled.Text`
  color: white;
  font-size: 16px;
  font-family: Montserrat_700Bold;
`;

export const FavoriteButton = styled.TouchableOpacity<{ disabled?: boolean }>`
  background-color: #bb86fc;
  border-radius: 999px;
  padding: 14px;
  align-items: center;
  opacity: ${(props: any) => (props.disabled ? 0.6 : 1)};
`;

export const FavoriteText = styled.Text`
  color: #050516;
  font-size: 16px;
  font-family: Montserrat_700Bold;
`;

export const GoFavorites = styled.TouchableOpacity`
  margin-top: 20px;
  align-items: center;
  padding: 10px;
`;

export const GoFavoritesText = styled.Text`
  color: #bb86fc;
  font-size: 15px;
  font-family: Montserrat_700Bold;
  text-decoration: underline;
`;
