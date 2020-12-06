import React, { ReactElement, useEffect, useState } from 'react';
import { Container, Footer, Header, Player, Title, Wrapper } from '../components';

const Target = (): ReactElement => {
  const [positions, setPositions] = useState<any>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const players = JSON.parse(window.localStorage.getItem('players'));

      players.sort(function (a, b) {
        if (a.points < b.points) {
          return 1;
        }
        if (a.points > b.points) {
          return -1;
        }

        return 0;
      });

      setPositions(players);
      setLoading(false);
    } catch {
      alert('No hay espacio en tu dispositivo.');
    }
  }, []);

  return (
    <Container>
      <Header />

      <Wrapper justify="flex-start">
        <Title text="Ranking" />

        {loading ? (
          <p>Cargando...</p>
        ) : (
          positions.length &&
          positions.map((pos) => {
            return <Player key={pos.id} name={pos.name} points={pos.points} id={pos.id} />;
          })
        )}
      </Wrapper>

      <Footer />
    </Container>
  );
};

export default Target;
