import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { CyclesContextProvider } from './contexts/CyclesContext'
import { ThemeContext, Themes } from './contexts/ThemeContext'

import { Router } from './Router'

import { GlobalStyle } from './styles/global'
import { darkTheme } from './styles/themes/dark'
import { lightTheme } from './styles/themes/light'

export function App() {
  const [theme, setTheme] = useState<Themes>(() => {
    const stateTheme = localStorage.getItem('@timer:cycles-state-themes-1.0.0')

    if(stateTheme) {
      return JSON.parse(stateTheme)
    }

    return 'dark';
  });

  function toogleTheme() {
    const newTheme = theme === 'dark' ? 'light' : 'dark'

    setTheme(newTheme)

    localStorage.setItem('@timer:cycles-state-themes-1.0.0', JSON.stringify(newTheme))
  }
  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <ThemeContext.Provider value={{ theme, toogleTheme}}>
        <BrowserRouter>
          <CyclesContextProvider>
            <Router />
          </CyclesContextProvider>
        </BrowserRouter>
      </ThemeContext.Provider>
      <GlobalStyle />
    </ThemeProvider>
  )
}
