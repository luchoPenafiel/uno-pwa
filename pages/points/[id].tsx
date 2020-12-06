import React, { ReactElement, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Card, Container, Footer, Header, Wrapper } from '../../components';
import theme from '../../constants/theme';

const Points = (): ReactElement => {
  const [otherPlayers, setOtherPlayers] = useState(undefined);
  const [selectedPlayer, setSelectedPlayer] = useState(undefined);
  const [totalPoints, setTotalPoints] = useState(0);
  const [status, setStatus] = useState('loadingInitialData');
  const router = useRouter();
  const { id } = router.query;

  const addValuCard = (value) => {
    setTotalPoints(totalPoints + value);
  };

  useEffect(() => {
    try {
      const allPlayers = JSON.parse(window.localStorage.getItem('players'));

      const otherPlayers = allPlayers.filter((player) => player.id != Number(id));
      const selectedPlayer = allPlayers.find((player) => player.id === Number(id));

      setOtherPlayers(otherPlayers);
      setSelectedPlayer(selectedPlayer);

      setStatus('loadedInitialData');
    } catch (error) {}
  }, [id]);

  return (
    <Container>
      <Header />
      <Wrapper justify="flex-start">
        {status === 'loadingInitialData' ? <p>Cargando puntos...</p> : null}

        <p>{totalPoints}</p>

        <br />
        <br />
        <br />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gridGap: '12px', width: '100%' }}>
          <Card color={theme.color.blue} text="0" />
          <Card color={theme.color.green} text="1" onClick={() => addValuCard(1)} />
          <Card color={theme.color.red} text="2" onClick={() => addValuCard(2)} />
          <Card color={theme.color.yellow} text="3" onClick={() => addValuCard(3)} />
          <Card color={theme.color.blue} text="4" onClick={() => addValuCard(4)} />
          <Card color={theme.color.green} text="5" onClick={() => addValuCard(5)} />
          <Card color={theme.color.red} text="6" onClick={() => addValuCard(6)} />
          <Card color={theme.color.yellow} text="7" onClick={() => addValuCard(7)} />
          <Card color={theme.color.blue} text="8" onClick={() => addValuCard(8)} />
          <Card color={theme.color.green} text="9" onClick={() => addValuCard(9)} />

          <Card color={theme.color.blue} text="+2" onClick={() => addValuCard(20)} />
          <Card color={theme.color.green} text="+4" onClick={() => addValuCard(20)} />
          <Card color={theme.color.red} text="R" onClick={() => addValuCard(20)} />
          <Card color={theme.color.yellow} text="B" onClick={() => addValuCard(20)} />
          <Card color={theme.color.blue} text="*" onClick={() => addValuCard(50)} />
        </div>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Points;
