import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';

import { 
  Container, 
  HeroImage, 
  ContentWrapper, 
  LogoTitle, 
  QuoteContainer,
  QuoteText,
  QuoteAuthor,
  ButtonContainer, 
  PrimaryButton, 
  PrimaryButtonText, 
  SecondaryButton, 
  SecondaryButtonText, 
  LogoTitleTwo,
  LoadingSpinner, 
  ButtonIcon,
  QuoteIcon,          
  SecondaryButtonIcon 
} from './styles';

const heroImg = require('../../../assets/banner.png');

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
      const response = await fetch('https://stoic-quotes.com/api/quote'); 
      const data = await response.json();
      setQuote({ text: data.text, author: data.author });
    } catch (error) {
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
      
      <HeroImage source={heroImg} resizeMode="cover" />

      <ContentWrapper>
        <LogoTitle>phiMind.</LogoTitle>
        <LogoTitleTwo>Descubra frases filosoficas diariamente</LogoTitleTwo>
        
        <QuoteContainer>
          {loading ? (
            <LoadingSpinner />
          ) : (
            <>
              <QuoteIcon name="quote-left" size={24} color="#6200EE" />
              
              <QuoteText>"{quote.text}"</QuoteText>
              <QuoteAuthor>— {quote.author}</QuoteAuthor>
            </>
          )}
        </QuoteContainer>
      </ContentWrapper>

      <ButtonContainer>
        <PrimaryButton onPress={handleNavigateToRegister} activeOpacity={0.8}>
          <PrimaryButtonText>Vamos Começar</PrimaryButtonText>
          
          <ButtonIcon 
            name="arrow-right" 
            size={20} 
            color="#fff" 
          />
        </PrimaryButton>

        <SecondaryButton onPress={handleNavigateToLogin} activeOpacity={0.6}>
          <SecondaryButtonText>Já tenho uma conta</SecondaryButtonText>
          
          <SecondaryButtonIcon 
            name="log-in" 
            size={18} 
            color="#1A1A1A" 
          />
        </SecondaryButton>
      </ButtonContainer>

    </Container>
  );
};

export default Home;