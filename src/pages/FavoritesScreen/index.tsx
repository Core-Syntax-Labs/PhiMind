import React, { useEffect, useState } from "react";
import { ActivityIndicator, Alert, FlatList } from "react-native";
import { useAuth } from "../../context/AuthContext";
import { api } from "../../database/api";

import {
  Container,
  Title,
  Card,
  TextPT,
  Author,
  RemoveButton,
  RemoveText,
} from "./styles";

type Favorite = {
  id_favorite: number;
  text: string;
  author: string;
};

const FavoritesScreen = () => {
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
      <Title>Minhas citações favoritas</Title>

      {loading ? (
        <ActivityIndicator size="large" color="#bb86fc" />
      ) : (
        <FlatList
          data={favorites}
          keyExtractor={(item) => String(item.id_favorite)}
          renderItem={({ item }) => (
            <Card>
              <TextPT>{item.text}</TextPT>
              <Author>— {item.author}</Author>

              <RemoveButton onPress={() => removeFavorite(item.id_favorite)}>
                <RemoveText>
                  {removingId === item.id_favorite ? "Removendo..." : "Remover"}
                </RemoveText>
              </RemoveButton>
            </Card>
          )}
          ListEmptyComponent={
            <TextPT style={{ textAlign: "center", opacity: 0.4, marginTop: 40 }}>
              Nenhum favorito ainda.
            </TextPT>
          }
        />
      )}
    </Container>
  );
};

export default FavoritesScreen;
