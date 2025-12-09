import styled from "styled-components/native";

/* CONTAINER GERAL */
export const Container = styled.View`
  flex: 1;
  background-color: #050516;
  padding: 18px 20px 20px 20px;
`;

/* AREA DO TOPO (logo + título + subtítulo) */
export const Top = styled.View`
  margin-top: 60px; /* aumentado para descer o topo */
  margin-bottom: 6px; /* reduzido para aproximar do meio */
  align-items: center;
`;

/* WRAPPER DO LOGO (círculo) */
export const LogoWrapper = styled.View`
  width: 72px;
  height: 72px;
  border-radius: 36px;
  background-color: rgba(124, 58, 237, 0.12);
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

/* Texto do ícone-logo (substituir por <Image> se tiver) */
export const LogoText = styled.Text`
  font-size: 32px;
  color: #bb86fc;
`;

/* Título grande (abaixo do logo) */
export const MainTitle = styled.Text`
  color: #ede7f6;
  font-size: 20px;
  font-family: Montserrat_700Bold;
  margin-bottom: 4px;
`;

/* Subtítulo menor explicativo */
export const Subtitle = styled.Text`
  color: #9aa0b2;
  font-size: 13px;
  text-align: center;
  margin-bottom: 8px;
`;

/* CARD DA CITAÇÃO */
export const QuoteCard = styled.View`
  background-color: #0f1020;
  border-radius: 20px;
  padding: 22px;
  margin-top: 8px; /* reduzido para aproximar do topo */
  margin-bottom: 12px;
  elevation: 3;
`;

/* Ícone de aspas (wrapper) */
export const QuoteIconWrapper = styled.View`
  width: 48px;
  height: 48px;
  border-radius: 24px;
  background-color: rgba(124, 58, 237, 0.08);
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
`;

/* TEXTO PRINCIPAL (PT) */
export const QuotePT = styled.Text`
  color: #e6e7ee;
  font-size: 17px;
  line-height: 24px;
`;

/* TEXTO SECUNDÁRIO (EN) */
export const QuoteEN = styled.Text`
  color: #9aa0b2;
  font-size: 13px;
  font-style: italic;
  margin-top: 10px;
`;

/* METADADOS (autor / fonte) */
export const MetaRow = styled.View`
  margin-top: 14px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Author = styled.Text`
  color: #bb86fc;
  font-size: 13px;
  font-family: Montserrat_700Bold;
`;

export const Source = styled.Text`
  color: #9aa0b2;
  font-size: 12px;
`;

/* FOOTER (botões) */
export const Footer = styled.View`
  margin-top: 12px;
  width: 100%;
  align-items: center;
  padding-bottom: 28px;
`;

/* BOTÃO PRINCIPAL (pil pill) */
export const PrimaryButton = styled.TouchableOpacity<{ disabled?: boolean }>`
  background-color: #7c3aed;
  padding: 12px 22px;
  border-radius: 999px;
  align-items: center;
  justify-content: center;
  opacity: ${(props: any) => (props.disabled ? 0.6 : 1)};
`;

/* TEXTO DO BOTÃO PRINCIPAL */
export const PrimaryButtonText = styled.Text`
  color: #fff;
  font-size: 15px;
  font-family: Montserrat_700Bold;
`;

/* LINHA DE AÇÕES (favoritar + ver favoritos) */
export const BottomRow = styled.View`
  margin-top: 12px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

/* BOTÃO DE ÍCONE */
export const IconButton = styled.TouchableOpacity<{ disabled?: boolean }>`
  padding: 10px;
  border-radius: 999px;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.03);
  opacity: ${(props: any) => (props.disabled ? 0.6 : 1)};
`;

/* Linha com coração + texto (para "Ver favoritos") */
export const FavoriteLink = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 6px 10px;
  border-radius: 999px;
  background-color: rgba(187, 134, 252, 0.06);
`;

/* Ícone de coração pequeno */
export const FavoriteIcon = styled.Text`
  color: #bb86fc;
  font-size: 14px;
  margin-right: 8px;
`;

/* Texto "Ver favoritos" */
export const LinkText = styled.Text`
  color: #bb86fc;
  font-size: 14px;
  font-family: Montserrat_700Bold;
`;

export const EmptyTitle = styled.Text`
  color: #d1d5db;
  font-size: 15px;
  margin-bottom: 6px;
  text-align: center;
`;

export const EmptySubtitle = styled.Text`
  color: #9aa0b2;
  font-size: 13px;
  text-align: center;
`;


/* SKELETON */
export const SkeletonBlock = styled.View`
  background-color: rgba(255, 255, 255, 0.03);
  height: 16px;
  border-radius: 8px;
  margin-bottom: 8px;
`;

/* ESTADO VAZIO */
export const EmptyContainer = styled.View`
  align-items: center;
  justify-content: center;
  padding: 20px;
`;
