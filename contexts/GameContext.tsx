/* eslint-disable @typescript-eslint/no-empty-function */
// Vendor
import React, { useContext, createContext, ReactElement, ReactNode, useState, useCallback, useEffect } from 'react';

// Types
import { Player } from '@uno/types/Player';

export const KEY = 'uno-calculator-game';

type GameData = {
  playersInGame: Player[];
  totalGamePoints: number;
};

const setGameData = (data: GameData) => {
  try {
    localStorage.setItem(KEY, JSON.stringify(data));
  } catch {}
};

const getGameData = async (): Promise<GameData | null> => {
  try {
    const response = await JSON.parse(localStorage.getItem(KEY));
    if (response) {
      return JSON.parse(response);
    }
  } catch {}

  return null;
};

type GameContextType = {
  playersInGame: Player[];
  totalGamePoints: number;
  setNewGame: (players: Player[], points: number) => void;
  setPlayerPoints: (player: Player, points: number) => void;
  setFinshGame: () => void;
};

const GameContext = createContext<GameContextType>({
  playersInGame: [],
  totalGamePoints: 500,
  setNewGame: () => {},
  setPlayerPoints: () => {},
  setFinshGame: () => {},
});

export const GameContextProvider = ({ children }: { children: ReactNode }): ReactElement => {
  const [playersInGame, setStatePlayersInGame] = useState<Player[]>([]);
  const [totalGamePoints, setStateTotalGamePoints] = useState(500);

  const setNewGame = useCallback((players: Player[], points) => {
    setStatePlayersInGame(players);
    setStateTotalGamePoints(points);

    setGameData({ totalGamePoints: points, playersInGame: players });
  }, []);

  const setPlayerPoints = useCallback((player: Player, points: number) => {
    setStatePlayersInGame((current) => {
      const newPlayersInGame = current.map((p) => {
        if (p.id === player.id) {
          return {
            ...p,
            pointsInGame: p.pointsInGame + points,
          };
        } else {
          return p;
        }
      });

      setGameData({ totalGamePoints, playersInGame: newPlayersInGame });

      return newPlayersInGame;
    });
  }, []);

  const setFinshGame = () => {
    setStatePlayersInGame([]);
    setStateTotalGamePoints(500);
    localStorage.removeItem(KEY);
  };

  useEffect(() => {
    (async () => {
      const data = await getGameData();

      if (data) {
        setStatePlayersInGame(data.playersInGame);
        setStateTotalGamePoints(data.totalGamePoints);
      }
    })();
  }, []);

  return (
    <GameContext.Provider value={{ playersInGame, setNewGame, setPlayerPoints, setFinshGame, totalGamePoints }}>
      {children}
    </GameContext.Provider>
  );
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useGameContext = () => useContext(GameContext);
