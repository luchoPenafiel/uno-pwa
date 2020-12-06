import React, { ReactElement } from 'react';
import Head from 'next/head';
import { Container, Footer, Header, MainButton, Wrapper } from '../components';

const Home = (): ReactElement => {
  return (
    <>
      <Head>
        <title>Calculadora de UNO</title>
      </Head>
      <Container>
        <Header />
        <Wrapper>
          <MainButton text="Comenzar" href="/players" />
        </Wrapper>
        <Footer />
      </Container>
    </>
  );
};

export default Home;
