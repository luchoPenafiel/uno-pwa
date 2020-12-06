import React, { ReactElement } from 'react';
import { Container, Footer, Header, MainButton, Wrapper } from '../components';

const Home = (): ReactElement => {
  return (
    <Container>
      <Header />
      <Wrapper>
        <MainButton text="Comenzar" href="/players" />
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Home;
