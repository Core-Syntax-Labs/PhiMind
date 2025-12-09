import React, { useEffect, useState } from "react";
import { ActivityIndicator, Alert, FlatList } from "react-native";
import { Feather, FontAwesome } from '@expo/vector-icons'; // Importe os ícones
import { useAuth } from "../../context/AuthContext";
import { api } from "../../database/api";

import {
  Container,
  Title,
  TitleContainer, // Novo container para alinhar titulo + icone
  Card,
  TextPT,
  Author,
  RemoveButton,
  RemoveText,
  HeaderBackButton,
} from "./styles";
import { useNavigation } from "@react-navigation/native";

type Favorite = {
  id_favorite: number;
  text: string;
  author: string;
};

const FavoritesScreen = () => {
  const navigation = useNavigation();
  const { user } = useAuth();
  const [favorites, setFavorites] = useState<Favorite[]>([]);
  const [loading, setLoading] = useState(false);
  const [removingId, setRemovingId] = useState<number | null>(null);

  const loadFavorites = async () => {
    if (!user) return;
    try {
      setLoading(true);
      const { data } = await api.get(`/favorites/${user.id}`);
      setFavorites(data);
    } catch (error) {
      Alert.alert("Erro", "Falha ao carregar favoritos.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadFavorites();
  }, []);

  const removeFavorite = async (id: number) => {
    Alert.alert("Remover favorito", "Deseja realmente remover?", [
      { text: "Cancelar", style: "cancel" },
      {
        text: "Remover",
        style: "destructive",
        onPress: async () => {
          try {
            setRemovingId(id);
            await api.delete(`/favorites/${id}`);
            setFavorites((prev) => prev.filter((f) => f.id_favorite !== id));
          } catch (error) {
            Alert.alert("Erro", "Não foi possível remover.");
          } finally {
            setRemovingId(null);
          }
        },
      },
    ]);
  };

  return (
    <Container>
      <HeaderBackButton onPress={() => navigation.goBack()}>
        <Feather name="arrow-left" size={24} color="#6200EE" />
      </HeaderBackButton>

      {/* Título */}
      <TitleContainer>
        <Title>Favoritos</Title>
        <FontAwesome name="heart" size={28} color="#6200EE" style={{ marginTop: 5 }} />
      </TitleContainer>

      {loading ? (
        <ActivityIndicator size="large" color="#6200EE" />
      ) : (
        <FlatList
          data={favorites}
          keyExtractor={(item) => String(item.id_favorite)}
          contentContainerStyle={{ paddingBottom: 20 }}
          renderItem={({ item }) => (
            <Card>
              <FontAwesome name="quote-left" size={16} color="#6200EE" style={{ opacity: 0.3, marginBottom: 5 }} />
              
              <TextPT>"{item.text}"</TextPT>
              <Author>— {item.author}</Author>

              {/* Botão Remover*/}
              <RemoveButton 
                onPress={() => removeFavorite(item.id_favorite)}
                activeOpacity={0.7}
              >
                <Feather name="trash-2" size={16} color="#FF375B" style={{ marginRight: 8 }} />
                <RemoveText>
                  {removingId === item.id_favorite ? "Removendo..." : "Remover"}
                </RemoveText>
              </RemoveButton>
            </Card>
          )}
          ListEmptyComponent={
            <TextPT style={{ textAlign: "center", opacity: 0.4, marginTop: 40 }}>
              Você ainda não favoritou nenhuma frase.
            </TextPT>
          }
        />
      )}
    </Container>
  );
};

export default FavoritesScreen;