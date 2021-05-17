
import './App.css';
import Inventars from "./component/invetars/inventars";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import inventtarDetails from "./component/invetars/inventar.details";
import Casts from "./component/case/Cases";


export default function App() {
  return (

         <div>
             <Router>
             <div>
                 <Link to={'/Inventars'}> to inventars</Link>
                 <Link to ={'/casts'}>to cases</Link>

                 <Switch>
                     <Route exact path={'/Inventars'} render={(props) => <Inventars {...props}/>}/>
                     <Route path={'/inventars/:id'} component={inventtarDetails}/>

                     <Route path={'/casts'} render={(props)=> <Casts {...props}/>}/>

                 </Switch>
             </div>

             </Router>

         </div>

  );
}


