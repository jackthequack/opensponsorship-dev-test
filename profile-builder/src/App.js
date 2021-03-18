import './App.css';
import ParentForm from './pages/ParentForm'
import {Button, Navbar, Nav, Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavLink, Switch, Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
 
      <Navigation />
      <Main /> 
    </div>
  );
}
const Navigation = () => (
  <Navbar className="bg-light justify-content-between">

   
        <Col class="col"><NavLink exact  to='/'>Form</NavLink></Col>
        <Col class="col"><NavLink exact  to='/profile'>Profile</NavLink></Col>
        <Col class="col"><NavLink exact  to='/list'>List</NavLink></Col>
     
  
   
    
  </Navbar>
);
const Main = () => (
  <Switch>
    <Route exact path='/' component={ParentForm}></Route>
    <Route exact path='/profile' component={Profile}></Route>
    <Route exact path='/list' component={List}></Route>
  </Switch>
);

const Form = () => (
  <div className='form'>
    <h1>Welcome to my portfolio website</h1>
    <p> Feel free to browse around and learn more about me.</p>
  </div>
);

const Profile = () => (
  <div className='profile'>
    <h1>About Me</h1>
    <p>Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident corporis fuga saepe distinctio ipsam? Et quos harum excepturi dolorum molestias?</p>
    <p>Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident corporis fuga saepe distinctio ipsam? Et quos harum excepturi dolorum molestias?</p>
  </div>
);

const List = () => (
  <div className='list'>
    <h1>Contact Me</h1>
    <p>You can reach me via email: <strong>hello@example.com</strong></p>
  </div>
);

export default App;
