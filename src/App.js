
import './App.css';
import LoginComponent from './components/login';
import Register from './components/register';
import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom'
import LessonHook from './refference/usestate';
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'  component={LoginComponent}/>
        <Route exact path='/SignUp'  component={Register}/>
        <Route exact path='/LessonHook'  component={LessonHook}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
