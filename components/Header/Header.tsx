import React, { ReactElement, useState } from 'react';
import NextLink from 'next/link';
import styled from 'styled-components';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import Title from '../Title/Title';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 50px;
`;

const Logo = styled.img`
  height: 60px;
`;

const Header = (): ReactElement => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Nav>
        <NextLink href="/" passHref>
          <a>
            <Logo src="/UNO_Logo.svg" />
          </a>
        </NextLink>
        <div>
          <Button text="Reglamento" variant="secondary" onClick={openModal} />
        </div>
      </Nav>
      {showModal && (
        <Modal onClose={closeModal}>
          <Title text="Objetivo del juego" />
          <p>
            El objetivo de UNO es deshacerse de todas las cartas que se “roban” inicialmente, diciendo la palabra “UNO”
            cuando queda la última carta en la mano. El primero que llega a los puntos establecidos gana. Se recibe
            puntos por todas las cartas que los otros jugadores todavía tienen en sus manos (véase puntos).
          </p>

          <Title text="La preparación del juego" />
          <p>
            Se baraja las cartas y cada jugador recibe siete cartas. Las cartas restantes se ponen encubiertas en el
            centro y forman el mazo. La primera carta se desvela y se pone al lado. Este mazo es el mazo de descartes.
            Un jugador se sortea y empieza la ronda.
          </p>

          <Title text="Decurso del juego" />
          <p>
            El primero jugador pone una carta de su mano al mazo de descartes. Aquí vale: Una carta sólo se puede
            superponer en una carta del mismo color o del mismo número. Las cartas negras son cartas de acción
            especiales con reglas particulares (ver cartas de acción). Si un jugador no puede poner la carta oportuna,
            tiene que tomar una carta de pena del mazo. Puede jugar esta carta ahora mismo, si la vale bien. Si no, es
            el turno del siguiente jugador. Quién pone la penúltima carta, debe decir “UNO” y señala que tiene sólo una
            última carta en la mano. Si un jugador lo olvida y el otro lo nota a tiempo (antes de que el siguiente
            jugador haya tomado o ha depuesto una carta) tiene que tomar dos cartas de pena. El ganador de la ronda es
            él que depone la última carta. Los puntos se suman y se comienza una nueva ronda.
          </p>

          <Title text="Cartas de Acción" />
          <p>
            <strong>CARTA TOMA DOS</strong>
          </p>
          <p>
            Cuando se pone esta carta, el siguiente jugador debe tomar dos cartas y no puede deponer ninguna carta en
            esta ronda. Esta carta sólo puede superponer en una carta con el color apropiado u otras cartas “toma dos”.
            Si se revela al principio del juego, las mismas reglas aplican.
          </p>
          <p>
            <strong>CARTA DE RETORNO</strong>
          </p>
          <p>
            Con esta carta se cambia la dirección. Si se ha jugado por la izquierda, ahora se juega por la derecha y por
            la inversa. La carta sólo se puede superponer en una carta con color correspondiente o en una otra carta de
            retorno. Cuando esta carta se toma en el principio del juego, el dador comienza y entonces el jugador a su
            derecha continúa.
          </p>
          <p>
            <strong>CARTA DE INTERMISIÓN</strong>
          </p>
          <p>
            Después de poner esta carta, el siguiente jugador será “saltado”. La carta sólo se puede superponer en una
            carta con color correspondiente o en una otra carta de intermisión. Cuando esta carta se toma en el
            principio del juego, el jugador se “salta” a la izquierda del dador y el jugador a la izquierda de este
            jugador continúa el juego.
          </p>
          <p>
            <strong>CARTA DE ELECCIÓN DE COLORES</strong>
          </p>
          <p>
            Con esta carta el jugador decide qué color sigue en el juego. También el color presente puede ser
            seleccionado. Una carta de elección de colores también se puede poner cuando el jugador puede poner una
            carta diferente. Si se toma una carta de elección de colores en el principio del juego, el jugador a la
            izquierda del dador decide qué color va a seguir.
          </p>
          <p>
            <strong>CARTA DE TOMAR CUATRO COLORES</strong>
          </p>
          <p>
            Esta carta es la mejor. El jugador decide qué color sigue en el juego. Además, el siguiente jugador debe
            tomar cuatro cartas. No se puede deponer cualquier carta en esta ronda. Por desgracia, la carta sólo se
            puede poner si el jugador que la tiene, no tiene ninguna carta en la mano que corresponde con el color del
            montón. Si el jugador tiene una carta con el número o una carta de acción, sin embargo la carta de tomar
            cuatro colores se puede poner.
          </p>
          <p>
            Un jugador que tiene una carta de tomar cuatro colores puede tirarse un farol y poner esa carta prohibida.
            Si el jugador se atrapa ciertas reglas aplican (ver cartas de pena). Si esta carta se toma en el principio
            del juego, se devuelve en el mazo y se toma otra carta.
          </p>

          <Title text="Penas" />
          <p>
            Si un jugador no respeta las reglas, debe tomar una o más cartas de pena. Las reglas son los siguientes:
          </p>
          <ul>
            <li>
              UNO: Si un jugador olvida llamar “UNO” después de su penúltima carta y el siguiente jugador aún no ha
              jugado su carta, debe tomar una carta de pena.
            </li>
            <li>Propuestas: Quién hace propuestas a sus jugadores, debe tomar dos cartas de pena.</li>
            <li>
              Puesto incorrecto: Quién pone una carta, a pesar de que no está o una carta incorrecta, debe reanudarla y
              además, recibe una carta de pena.
            </li>
            <li>
              La +4 sólo se puede poner cuando el jugador no puede utilizar el color actual con excepción de otras
              cartas de acción. Si el jugador que tiene la +4 cree que la carta se ha jugado mal, puede desafiar el
              jugador anterior. Debe entonces justificar al mostrar sus cartas que en realidad no podía operar
              correctamente el color. Puede confirmarlo, el jugador desafiante ahora debe tomar seis cartas en lugar de
              cuatro. Sin embargo fue trasladado a tener la +4 ilegalmente, debe tomar las cuatro cartas a su mismo.
            </li>
          </ul>

          <Title text="Puntos" />
          <p>
            El jugador que ha puesto todas sus cartas primeramente, recibe los siguientes puntos por las cartas de sus
            jugadores que tienen todavía en la mano:
          </p>
          <ul>
            <li>Todas las cartas de números: su valor</li>
            <li>Carta toma dos: 20 puntos</li>
            <li>Carta de retorno: 20 puntos</li>
            <li>Carta de intermisión: 20 puntos</li>
            <li>Carta de elección de colores: 50 puntos</li>
            <li>Carta de tomar cuatro colores: 50 puntos</li>
          </ul>

          <Title text="Variantes del juego" />
          <p>
            Las reglas estandar del UNO son las mencionadas anteriormente, pero existen distintas variantes a las que
            los jugadores pueden someterse.
          </p>
        </Modal>
      )}
    </>
  );
};

export default Header;
