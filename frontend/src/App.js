import "./App.css";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import "./pages/Stylesheet/Style.css";
import {BrowserRouter as Router,Switch,Route} from   "react-router-dom";


function App() {
  
  return (
  <div className="App">
  <Router> 
      <Switch>

        
        <Route exact path='/' component ={Signin}></Route>
        <Route exact path='/home' component ={Home}></Route>
      
        
      </Switch>
  </Router>  
  </div>
  );
}

export default App;
