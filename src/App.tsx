import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { IssuesProvider } from './contexts/IssuesContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <IssuesProvider>
          <Router />
        </IssuesProvider>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}
