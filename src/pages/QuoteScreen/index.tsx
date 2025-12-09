import React, { useEffect, useRef, useState } from "react";
import { ActivityIndicator, Alert, Animated, Easing, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../context/AuthContext";
import { api } from "../../database/api";

import {
  Container,
  Top,
  LogoWrapper,
  LogoText,
  MainTitle,
  Subtitle,
  QuoteCard,
  QuoteIconWrapper,
  QuotePT,
  QuoteEN,
  MetaRow,
  Author,
  Source,
  Footer,
  PrimaryButton,
  PrimaryButtonText,
  BottomRow,
  IconButton,
  FavoriteLink,
  FavoriteIcon,
  LinkText,
  SkeletonBlock,
  EmptyContainer,
  EmptyTitle,
  EmptySubtitle,
} from "./styles";

type QuoteResponse = {
  text_en?: string;
  text_pt?: string;
  author?: string;
  source?: string;
  id?: string | number;
};

const QuoteScreen: React.FC = () => {
  const navigation = useNavigation();
  const { user } = useAuth();

  const [quote, setQuote] = useState<QuoteResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [savingFavorite, setSavingFavorite] = useState<boolean>(false);
  const [favorited, setFavorited] = useState<boolean>(false);

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const heartScale = useRef(new Animated.Value(1)).current;

  const startFadeIn = () => {
    fadeAnim.setValue(0);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 260,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: true,
    }).start();
  };

  const pulseHeart = () => {
    heartScale.setValue(0.75);
    Animated.spring(heartScale, {
      toValue: 1,
      friction: 5,
      useNativeDriver: true,
    }).start();
  };

  const fetchQuote = async () => {
    try {
      setLoading(true);
      const { data } = await api.get<QuoteResponse>("/quotes/random");
      setQuote(data);
      setFavorited(false);
      startFadeIn();
    } catch (error) {
      console.log("fetchQuote error:", error);
      Alert.alert("Erro", "Não foi possível carregar a citação.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  const saveFavorite = async () => {
    if (!quote || !user) {
      Alert.alert("Aviso", "Você precisa estar logado.");
      return;
    }

    try {
      setSavingFavorite(true);
      await api.post("/favorites", {
        text: quote.text_pt ?? quote.text_en,
        author: quote.author,
        userId: (user as any).id,
      });

      setFavorited(true);
      pulseHeart();
      Alert.alert("Sucesso", "Citação favoritada!");
    } catch (err) {
      console.log("saveFavorite error:", err);
      Alert.alert("Erro", "Falha ao salvar favorito.");
    } finally {
      setSavingFavorite(false);
    }
  };

  const renderSkeleton = () => (
    <QuoteCard>
      <SkeletonBlock style={{ width: "75%", height: 18 }} />
      <SkeletonBlock style={{ width: "100%", height: 16 }} />
      <SkeletonBlock style={{ width: "92%", height: 16 }} />
      <SkeletonBlock style={{ width: "64%", height: 16, marginTop: 14 }} />
    </QuoteCard>
  );

  if (!loading && !quote) {
    return (
      <Container>
        <Top>
          <LogoWrapper>
            <LogoText>📜</LogoText>
          </LogoWrapper>
          <MainTitle>Gerador de Frases IA</MainTitle>
          <Subtitle>Crie frases únicas de forma fácil e prática.</Subtitle>
        </Top>

        <EmptyContainer>
          <Text style={{ color: "#e6e7ee", fontWeight: "600", marginBottom: 6 }}>Ops — nada para mostrar</Text>
          <Text style={{ color: "#9aa0b2", fontSize: 13, textAlign: "center", marginBottom: 14 }}>
            Tente gerar uma nova citação ou verifique sua conexão.
          </Text>

          <PrimaryButton onPress={fetchQuote} style={{ marginBottom: 12 }}>
            <PrimaryButtonText>Carregar citações</PrimaryButtonText>
          </PrimaryButton>

          <BottomRow>
            {/* coração + texto lado a lado — todo o bloco é clicável */}
            <FavoriteLink onPress={() => (navigation as any).navigate("Favorites")}>
              <FavoriteIcon>♥</FavoriteIcon>
              <LinkText>Ver favoritos</LinkText>
            </FavoriteLink>
          </BottomRow>
        </EmptyContainer>
      </Container>
    );
  }

  return (
    <Container>
      <Top>
        <LogoWrapper>
          <LogoText>📜</LogoText>
        </LogoWrapper>
        <MainTitle>Gerador de Frases Filosoficas </MainTitle>
        <Subtitle> Veja frases de filosofos famosos para clarar seu dia </Subtitle>
      </Top>

      {loading && renderSkeleton()}

      {!loading && quote && (
        <Animated.View style={{ opacity: fadeAnim }}>
          <QuoteCard>
            <QuoteIconWrapper>
              <Text style={{ color: "#bb86fc", fontSize: 24 }}>“</Text>
            </QuoteIconWrapper>

            <QuotePT>{quote.text_pt ?? quote.text_en}</QuotePT>
            {quote.text_en ? <QuoteEN>{quote.text_en}</QuoteEN> : null}

            <MetaRow>
              <Author>{quote.author ?? "Autor desconhecido"}</Author>
              <Source>{quote.source ?? ""}</Source>
            </MetaRow>
          </QuoteCard>
        </Animated.View>
      )}

      <Footer>
        <PrimaryButton onPress={fetchQuote} disabled={loading}>
          {loading ? <ActivityIndicator color="#fff" /> : <PrimaryButtonText>Nova citação</PrimaryButtonText>}
        </PrimaryButton>

        <BottomRow>
          <IconButton onPress={saveFavorite} disabled={savingFavorite || !quote}>
            <Animated.View style={{ transform: [{ scale: heartScale }] }}>
              <Text style={{ color: favorited ? "#ef4444" : "#bb86fc", fontSize: 20 }}>
                {favorited ? "♥" : "♡"}
              </Text>
            </Animated.View>
          </IconButton>

          <FavoriteLink onPress={() => (navigation as any).navigate("Favorites")}>
            <FavoriteIcon>♥</FavoriteIcon>
            <LinkText>Ver favoritos</LinkText>
          </FavoriteLink>
        </BottomRow>
      </Footer>
    </Container>
  );
};

export default QuoteScreen;
