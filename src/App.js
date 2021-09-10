import './mainStyles/App.css';
import { ThemeProvider } from '@material-ui/core'
import { unstable_createMuiStrictModeTheme as createTheme } from '@material-ui/core/styles'
import MainLayout from './templates/MainLayout';

const theme = createTheme({
  typography: {
    fontFamily: 'Oswald',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600
  }
})

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <MainLayout />
      </ThemeProvider>
    </>
  )
}

export default App;