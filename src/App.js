import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HomePage from "./components/HomePage"
import LoginPage from "./components/LoginPage"
import './App.css';

const App = () =>(
    <BrowserRouter>
    <Switch>
        <Route exact path="/" component={LoginPage}/>
        <Route path="/home" component={HomePage}/>
    </Switch>
    </BrowserRouter>
) 


export default App;
