import React, { ReactElement } from 'react';
import Head from 'next/head';
import { Container, Footer, Header, Wrapper } from '../components';

const Reglamento = (): ReactElement => {
  return (
    <>
      <Head>
        <title>Calculadora de UNO</title>
      </Head>
      <Container>
        <Header />
        <Wrapper>
          <p>Reglamento</p>
        </Wrapper>
        <Footer />
      </Container>
    </>
  );
};

export default Reglamento;
