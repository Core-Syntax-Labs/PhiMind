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
  SecondaryButtonIcon, 
  HeroContainer,
  BottomFade,
  TopFade,
  LogoIcon
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
      
      let attempts = 0;
      let foundShortQuote = false;
      const MAX_LENGTH = 120; //  limite de caracteres desejado
      const MAX_ATTEMPTS = 5; // Tenta buscar 5 vezes antes de desistir e usar local

      while (attempts < MAX_ATTEMPTS && !foundShortQuote) {
        const response = await fetch('https://stoic-quotes.com/api/quote');
        const data = await response.json();

        // Verifica se o tamanho do texto é menor ou igual ao limite
        if (data.text.length <= MAX_LENGTH) {
          setQuote({ text: data.text, author: data.author });
          foundShortQuote = true; // Encerra o loop
        }
        
        attempts++;
      }

      // Se após 5 tentativas não achar uma curta, lança erro para cair no catch
      if (!foundShortQuote) {
        throw new Error('Nenhuma frase curta encontrada.');
      }

    } catch (error) {
      // Se der erro na API ou se todas as frases vierem longas, usa as locais
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
      <StatusBar style="light" />
      
      <HeroContainer>
        <TopFade colors={['#FFFFFF', 'transparent']} />
        <HeroImage source={heroImg} resizeMode="cover" />
        <BottomFade colors={['transparent', '#FFFFFF']} />
      </HeroContainer>

      <ContentWrapper>
        <LogoTitle>
            PhiMind 
          <LogoIcon name="quote-left"/>
        </LogoTitle>
        <LogoTitleTwo>Descubra frases filosóficas em um clique!</LogoTitleTwo>
        
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