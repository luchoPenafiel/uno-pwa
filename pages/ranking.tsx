import React, { ReactElement, useEffect, useState } from 'react';
import { Container, Header, Modal, Player, Title, Wrapper } from '../components';

const Target = (): ReactElement => {
  const [positions, setPositions] = useState<any>([]);
  const [showModal, setShowModal] = useState(false);
  const [playerWin, setPlayerWin] = useState('');
  const [loading, setLoading] = useState(true);

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    try {
      const players = JSON.parse(window.localStorage.getItem('players'));
      const target = JSON.parse(window.localStorage.getItem('target'));

      const isWin = players.find((player) => player.points >= Number(target));

      if (isWin) {
        setPlayerWin(isWin.name);
        setShowModal(true);
      }

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
    <>
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
      </Container>
      {showModal && (
        <Modal onClose={closeModal}>
          <Title text={`!${playerWin} ganó el juego!`} />
        </Modal>
      )}
    </>
  );
};

export default Target;
