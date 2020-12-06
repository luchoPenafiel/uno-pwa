import React, { ReactElement, useState } from 'react';
import Router from 'next/router';
import { useForm } from 'react-hook-form';
import { Button, Container, Footer, Header, Input, Title, Wrapper } from '../components';
import placeholder from '../constants/placeholders';

const Players = (): ReactElement => {
  const [counter, setCounter] = useState(['Woody', 'Buzz', 'Jessie', 'Sr. Cara de Papa']);
  const { register, handleSubmit } = useForm();

  const addPlayer = () => {
    const newCounter = [...counter, placeholder[counter.length]];

    setCounter(newCounter);
  };

  const onSubmit = async (formData) => {
    const values = Object.values(formData);
    const players = [];

    for (const value of values) {
      if (!!value) {
        players.push({
          name: value,
          points: 0,
          id: values.indexOf(value),
        });
      }
    }

    try {
      window.localStorage.setItem('players', JSON.stringify(players));

      Router.push('/target');
    } catch (error) {
      alert('No hay espacio en tu dispositivo');
    }
  };

  return (
    <Container>
      <Header />
      <Wrapper justify="flex-start">
        <Title text="¿Quiénes van a jugar?" />

        <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
          {counter.map((el, idx) => {
            return <Input key={el} type="text" placeholder={el} name={`player${idx}`} register={register} />;
          })}

          <Button
            type="button"
            text="Agregar otro jugador"
            onClick={addPlayer}
            variant="secondary"
            disabled={counter.length >= 16}
          />
          <div style={{ marginBottom: '50px' }} />

          <Button type="submit" text="Siguiente" />
        </form>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Players;
