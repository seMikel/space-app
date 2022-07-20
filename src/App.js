import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import AppMenu from './AppMenu';
import Planets from './Planets';
import Planet from './Planet';
import Order from './Order';
import Auth from './Auth';

const theme = createTheme({
  palette: {
    primary: {
      main: '#fff',
    },
    mode: 'dark',
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
          color: '#fff',
          fontSize: 20,
          borderRadius: 15,
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        notchedOutline: {
          border: 'none',
        },
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: 15,
        },
      },
    },
  },
  typography: {
    body1: {
      color: '#fff',
      fontFamily: `'Arial', sans-serif`,
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <AppMenu />
        <Routes>
          <Route path="/planets" element={<Planets />} />
          <Route path="/planets/:planetId" element={<Planet />} />
          <Route path="/tickets" element={<Order />} />
          <Route path="/auth" element={<Auth />} />
          <Route
            path="*"
            element={<Navigate to="/planets" />}
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
