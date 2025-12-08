import React, { useEffect, useState } from "react";
import { ActivityIndicator, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { useAuth } from "../../context/AuthContext";
import { api } from "../../database/api";

import {
  Container,
  Title,
  QuoteCard,
  QuotePT,
  QuoteEN,
  Author,
  Source,
  Button,
  ButtonText,
  FavoriteButton,
  FavoriteText,
  GoFavorites,
  GoFavoritesText,
} from "./styles";

type QuoteResponse = {
  text_en: string;
  text_pt: string;
  author: string;
  source: string;
};

const QuoteScreen = () => {
  const navigation = useNavigation();
  const { user } = useAuth();

  const [quote, setQuote] = useState<QuoteResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [savingFavorite, setSavingFavorite] = useState(false);

  const fetchQuote = async () => {
    try {
      setLoading(true);
      const { data } = await api.get<QuoteResponse>("/quotes/random");
      setQuote(data);
    } catch (error) {
      console.log(error);
      Alert.alert("Erro", "Não foi possível carregar uma citação.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  const saveFavorite = async () => {
    if (!quote || !user) return;

    try {
      setSavingFavorite(true);

      await api.post("/favorites", {
        text: quote.text_pt || quote.text_en,
        author: quote.author,
        userId: user.id,
      });

      Alert.alert("Sucesso", "Citação favoritada!");
    } catch (error) {
      console.log(error);
      Alert.alert("Erro", "Falha ao salvar favorito.");
    } finally {
      setSavingFavorite(false);
    }
  };

  return (
    <Container>
      <Title>Sua citação de hoje</Title>

      {loading && <ActivityIndicator size="large" color="#bb86fc" />}

      {!loading && quote && (
        <QuoteCard>
          <QuotePT>{quote.text_pt}</QuotePT>
          <QuoteEN>{quote.text_en}</QuoteEN>
          <Author>— {quote.author}</Author>
          <Source>Fonte: {quote.source}</Source>
        </QuoteCard>
      )}

      {/* Gerar nova */}
      <Button onPress={fetchQuote} disabled={loading}>
        <ButtonText>{loading ? "Carregando..." : "Nova citação"}</ButtonText>
      </Button>

      {/* Favoritar */}
      <FavoriteButton onPress={saveFavorite} disabled={savingFavorite || !quote}>
        <FavoriteText>{savingFavorite ? "Salvando..." : "Adicionar aos favoritos"}</FavoriteText>
      </FavoriteButton>

      {/* Link para favorites */}
      <GoFavorites onPress={() => navigation.navigate("Favorites" as never)}>
        <GoFavoritesText>Ver favoritos</GoFavoritesText>
      </GoFavorites>
    </Container>
  );
};

export default QuoteScreen;
