
import './App.css';
import {useEffect} from 'react'
import { BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import React from 'react'
import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';
import Footer from './components/Footer';
import Body from './components/Body';
import Container from '@material-ui/core/Container';


function App() {
  const [location,setLocation]=React.useState([]);
 const [flag,setFlag]=React.useState(false);

  useEffect(async() => {  
    const endpoint=`http://jada-app.bimsaudi.com:8021/api/location`;
  const data= await(await fetch(endpoint)).json();

   setLocation(data.locations);
   setFlag(true)

 },[])

const searchLocation=(selectedItem)=>{
  
  const newLocItems=location.filter(choice => choice === selectedItem)

  setLocation(newLocItems);
  }

  return (
   <> 

   <Container>
    <Router>
    <Navbar/>
    <Switch>
    <Route path='/' exact/>
    </Switch>
    </Router>
    {flag ?<Searchbar locations={location} searchLocation={searchLocation}/>: <div></div>}
    {flag ?<Body locations={location}/>: <div></div>}
   
  
    <Footer/>
    </Container>
 
   </>
   
  );
}

export default App;
