import './App.css';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom'
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import About from './pages/About';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Single_room from './pages/Single_room';
import Error from './pages/Error';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <>
    <Navbar/>
    <Router>
      <Switch>
      <Route exact path = "/" component = {Home}/>
      <Route exact path = "/rooms" component = {Rooms}/>
      <Route exact path = "/gallery" component = {Gallery}/>
      <Route exact path = "/about_us" component = {About}/>
      <Route exact path = "/contact_us" component = {Contact}/>
      <Route exact path = "/rooms/:roomType" component = {Single_room}/>
      <Route component = {Error}/>
      </Switch>
    </Router>
      
    </>
  );
}

export default App;
