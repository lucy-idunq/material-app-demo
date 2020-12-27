
import { CssBaseline, makeStyles, createMuiTheme ,ThemeProvider} from '@material-ui/core';
import Header from './Test1/Components/Header';
import SideMenu from './Test1/Components/SideMenu';
import Employee from './Test1/Components/Pages/Employees/Employee';

const theme = createMuiTheme({
  palette:{
    primary:{
      main:'#333996',
      light:'#3c44b126'
    },
    secondary:{
      main:'#f83245',
      light:'#f8325626'
    },
    background:{
      default:'#f4f4f4'
    }
  },
  overrides:{
      MuiAppBar:{
          root:{
              transform:'translateZ(0)'
          }
      }
  },
  props:{
      MuiIconButton:{
          disableRipple:true
      }
  }
//   shape:{
//       borderRadius:'12px',
//   }
})

const useStyles = makeStyles({
  appMain: {
    paddingLeft: '320px',
    widht: '100%'
  }
})
function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <SideMenu />
      <div className={classes.appMain}>
        <Header />
       
        <Employee/>
      </div>
    <CssBaseline/>
    </ThemeProvider>
  );
}

export default App;
