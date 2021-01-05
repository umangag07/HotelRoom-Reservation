import './App.css';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom'
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import Single_room from './pages/Single_room';
import Error from './pages/Error';
function App() {
  return (
    <>
    <Router>
      <Switch>
      <Route exact path = "/" component = {Home}/>
      <Route exact path = "/rooms" component = {Rooms}/>
      <Route exact path = "/rooms/:roomType" component = {Single_room}/>
      <Route component = {Error}/>
      </Switch>
    </Router>
      
    </>
  );
}

export default App;
