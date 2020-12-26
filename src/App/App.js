
import { CssBaseline, makeStyles } from '@material-ui/core';
import Header from './Components/Header';
import SideMenu from './Components/SideMenu';

const useStyles = makeStyles({
  appMain: {
    paddingLeft: '320px',
    widht: '100%'
  }
})
function App() {
  const classes = useStyles();
  return (
    <>
      <SideMenu />
      <div className={classes.appMain}>
        <Header />
      </div>
    <CssBaseline/>
    </>
  );
}

export default App;
