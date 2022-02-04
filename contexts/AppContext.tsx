/* eslint-disable @typescript-eslint/no-empty-function */
// Vendor
import React, { useContext, createContext, ReactElement, ReactNode, useState, useCallback, useEffect } from 'react';

export const KEY = 'uno-calculator-app';

const DEFAULT_STATE = {
  gameInProgress: false,
  giveCoffe: true,
};

type AppData = {
  gameInProgress: boolean;
  giveCoffe: boolean;
};

const setAppData = async (data: AppData) => {
  try {
    localStorage.setItem(KEY, JSON.stringify(data));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
};

const getAppData = async (): Promise<AppData | null> => {
  try {
    const response = await JSON.parse(localStorage.getItem(KEY));
    if (response) {
      return JSON.parse(response);
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }

  return null;
};

type AppContextType = {
  gameInProgress: boolean;
  giveCoffe: boolean;
  setGameInProgress: (value: boolean) => void;
  setGiveCoffe: (value: boolean) => void;
};

const AppContext = createContext<AppContextType>({
  gameInProgress: false,
  giveCoffe: true,
  setGameInProgress: () => {},
  setGiveCoffe: () => {},
});

export const AppContextProvider = ({ children }: { children: ReactNode }): ReactElement => {
  const [appData, setStateAppData] = useState<AppData>(DEFAULT_STATE);

  const setGameInProgress = useCallback((value) => {
    setStateAppData((current) => {
      return { ...current, gameInProgress: value };
    });

    setAppData({ ...appData, gameInProgress: value });
  }, []);

  const setGiveCoffe = useCallback((value) => {
    setStateAppData((current) => {
      return { ...current, giveCoffe: value };
    });

    setAppData({ ...appData, giveCoffe: value });
  }, []);

  useEffect(() => {
    (async () => {
      const data = await getAppData();

      if (data) {
        setStateAppData(data);
      }
    })();
  }, []);

  return <AppContext.Provider value={{ ...appData, setGameInProgress, setGiveCoffe }}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
