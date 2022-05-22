import './App.css'
import { Grid } from '@mui/material'
import GigCards from './components/GigCards'
import MiddleNavbar from './components/MiddleNavbar'
import { Container } from '@mui/system'
import VerticalTabs from './components/VerticalTabs'
import MainHeader from './components/MainHeader'


function App() {
  return (

    <div className='App'>
      <Grid container>
        <Grid item sm={1} >

          <VerticalTabs />
        </Grid>
        <Grid item sm={11} container style={{ position: "absolute", left: "7.5em" }}>

          <MainHeader />

          <Grid item sm={12} >

            <MiddleNavbar />
            <GigCards />

          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default App
