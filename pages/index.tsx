import React, { ReactElement, useEffect, useState } from 'react';
import NextLink from 'next/link';
import { Container, Footer, Header, MainButton, Wrapper } from '../components';

const Home = (): ReactElement => {
  const [oldGame, setOldGame] = useState(false);

  useEffect(() => {
    try {
      const isPlayers = JSON.parse(window.localStorage.getItem('players'));
      const isTarget = JSON.parse(window.localStorage.getItem('target'));

      if (isPlayers && isTarget) {
        setOldGame(true);
      }
    } catch {
      alert('No tienes suficiente espacio en el dispositivo');
    }
  }, []);

  return (
    <Container>
      <Header />
      <Wrapper>
        <MainButton text="Nueva partida" href="/players" />

        {oldGame ? (
          <NextLink href="/ranking" passHref>
            <a>Continuar partida</a>
          </NextLink>
        ) : null}
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Home;
