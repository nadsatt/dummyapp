import { createContext, useContext } from './framework';

export const AppContext = createContext();
export const useAppContext = () => useContext(AppContext);

export const SearchTimerContext = createContext();
export const useSearchTimerContext = () => useContext(SearchTimerContext);

export const SearchTimerPassedContext = createContext();
export const useSearchTimerPassedContext = () => useContext(SearchTimerPassedContext);

export const SearchValueContext = createContext();
export const useSearchValueContext = () => useContext(SearchValueContext);
