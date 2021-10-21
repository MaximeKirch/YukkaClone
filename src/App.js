import './App.css';
import Home from './component/Home'
import Product from './component/Product';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/Product/:barcode' component={Product} />
      </Switch>
     
     
    </div>
  );
}

export default App;
