import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
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

// Fallback: Frases locais importantes caso a API falhe
const localQuotes = [
  { text: "A vida não examinada não vale a pena ser vivida.", author: "Sócrates" },
  { text: "O que não provoca minha morte faz com que eu fique mais forte.", author: "Nietzsche" },
  { text: "Penso, logo existo.", author: "Descartes" },
  { text: "A felicidade depende de nós mesmos.", author: "Aristóteles" }
];

const Home = () => {
  const navigation = useNavigation();
  
  const [quote, setQuote] = useState({ text: '', author: '' });
  const [loading, setLoading] = useState(true);

  async function fetchQuote() {
    try {
      setLoading(true);
      
      // API Stoic Quotes
      const response = await fetch('https://stoic-quotes.com/api/quote'); 
      const data = await response.json();

      console.log("Stoic API Response:", data); // Conferir no terminal

      setQuote({
        text: data.text, 
        author: data.author
      });

    } catch (error) {
      console.log("Erro na API Stoic, usando local:", error);
      
      // Fallback
      const randomLocal = localQuotes[Math.floor(Math.random() * localQuotes.length)];
      setQuote(randomLocal);
    } finally {
      setLoading(false);
    }
  }

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
          <ActivityIndicator size="large" color="#6200EE" />
        ) : (
          <>
            {/* Exibe a frase carregada */}
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