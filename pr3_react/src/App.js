
import './App.css';
import Characters from "./components/Character/Characters";
import Inventars from "./components/inventory/Inventars";
import DetailsUser from "./components/inventory/inventar.details";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default function App() {
  return (
      <Router>

            <div>
                <div><Link to={'/character'}> to character </Link></div>
                <div><Link to={'/inventar'}> to inventar </Link></div>

                <Switch>
                    <Route path={'/character'} render={() => <Characters/> } />
                    <Route exact path={'/inventar'} render={(props) =>{

                       return <Inventars {...props}/>
                    }}/>
                    <Route path={'/invertar/:id'} component={<DetailsUser/>} />
                </Switch>

            </div>
      </Router>

  );

}


