import { createContext } from "react";

export type Themes = 'dark' | 'light'

export interface ThemeTypes {
  theme: Themes
  toogleTheme: () => void 
}

export const ThemeContext = createContext({} as ThemeTypes)