import { createContext, useContext } from 'react';

export const AppContext = createContext();
export const useAppContext = () => useContext(AppContext);

export const SearchValueContext = createContext();
export const useSearchValueContext = () => useContext(SearchValueContext);

export const SearchTimerPassedContext = createContext();
export const useSearchTimerPassedContext = () => useContext(SearchTimerPassedContext);

export const CurrentBreedContext = createContext();
export const useCurrentBreedContext = () => useContext(CurrentBreedContext);
