import { createGlobalStyle } from 'styled-components';
import { AppRouters } from './pages/routers';
import { ThemeProvider } from './theme-context';

function App() {
 
  return (
      <ThemeProvider>
        <GlobalStyle />
        <AppRouters />
      </ThemeProvider>
  );
}

const GlobalStyle = createGlobalStyle`
  :root {
        --clr-dark: hsl(230 35% 7%);
        --clr-light: hsl(231 77% 90%);
        --clr-white: hsl(0 0% 100%);
    
        --clr-dark-green: hsl(130, 93%, 32%);
        --clr-light-blue: hsl(184, 100%, 53%);
        --clr-dark-blue: hsl(250, 100%, 25%);
    }
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

  body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        min-width: 100vh;
        min-height: 100vh; 
        display: flex;
        justify-content: center;
  
      @media (max-width: 640px) {
            min-width: 100%;
            min-height: 100%;
      }

    }

  a {
      text-decoration: none;
  }

  ul {
      list-style: none;
  }
`

export default App;
