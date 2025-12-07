import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';

import { 
  Container, 
  LogoTitle, 
  Tagline,
  QuoteContainer,
  QuoteText,
  QuoteAuthor,
  ButtonContainer, 
  PrimaryButton, 
  PrimaryButtonText, 
  SecondaryButton, 
  SecondaryButtonText 
} from './styles';

// Fallback: Frases locais caso a API falhe ou demore
const localQuotes = [
  { text: "A vida não examinada não vale a pena ser vivida.", author: "Sócrates" },
  { text: "O que não provoca minha morte faz com que eu fique mais forte.", author: "Nietzsche" },
  { text: "Penso, logo existo.", author: "Descartes" },
  { text: "A felicidade depende de nós mesmos.", author: "Aristóteles" }
];

// Tipagem da resposta da API (ZenQuotes)
interface QuoteData {
  q: string; // Quote text
  a: string; // Author
}

const Home = () => {
  const navigation = useNavigation();
  
  // Estado para armazenar a frase atual
  const [quote, setQuote] = useState({ text: '', author: '' });
  // Estado de carregamento
  const [loading, setLoading] = useState(true);

  // Função para buscar a frase
  async function fetchQuote() {
    try {
      setLoading(true);
      // Usando ZenQuotes (Proxy necessário em dev as vezes, usar https://api.quotable.io/random para testes mais fáceis)
      // usado o Quotable aqui pois ela tem menos bloqueio de CORS em desenvolvimento
      const response = await fetch('https://api.quotable.io/random?tags=philosophy,wisdom');
      const data = await response.json();

      setQuote({
        text: data.content, // Na API Quotable o texto vem em 'content'
        author: data.author
      });

    } catch (error) {
      console.log("Erro ao buscar frase, usando local:", error);
      // Se der erro, pega uma aleatória do banco local
      const randomLocal = localQuotes[Math.floor(Math.random() * localQuotes.length)];
      setQuote(randomLocal);
    } finally {
      setLoading(false);
    }
  }

  // Chama a API assim que a tela abre
  useEffect(() => {
    fetchQuote();
  }, []);

  function handleNavigateToLogin() {
    navigation.navigate('Login' as never);
  }

  function handleNavigateToRegister() {
    navigation.navigate('Cadastro' as never);
  }

  return (
    <Container>
      <StatusBar style="dark" />
      
      <LogoTitle>phiMind.</LogoTitle>
      <Tagline>Explore as mentes mais brilhantes do mundo. Descubra frases de filósofos famosos todos os dias.</Tagline>

      <QuoteContainer>
        {loading ? (
          // Mostra um spinner rodando enquanto carrega
          <ActivityIndicator size="large" color="#6200EE" />
        ) : (
          <>
            {/* O texto pode vir em inglês da API. Futuramente podemos adicionar tradução */}
            <QuoteText>"{quote.text}"</QuoteText>
            <QuoteAuthor>— {quote.author}</QuoteAuthor>
          </>
        )}
      </QuoteContainer>

      <ButtonContainer>
        <PrimaryButton onPress={handleNavigateToLogin} activeOpacity={0.8}>
          <PrimaryButtonText>ENTRAR</PrimaryButtonText>
        </PrimaryButton>

        <SecondaryButton onPress={handleNavigateToRegister} activeOpacity={0.6}>
          <SecondaryButtonText>Cadastre-se para favoritar suas frases favoritas</SecondaryButtonText>
        </SecondaryButton>
      </ButtonContainer>

    </Container>
  );
};

export default Home;