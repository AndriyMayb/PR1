import {useEffect, useState} from "react";
import {getInventory} from "../servis/ipa.inventar";
import Inventar from "./inventar";
import {Route} from "react-router-dom";
 import inventtarDetails from "./inventar.details";


export default  function Inventars(props) {
    let {match:{url}} = props
    let [inventarrs,setInventarrs] = useState([])
    useEffect(()=>{
        getInventory().then(value =>setInventarrs(value.data)

         )

    },[])

    return (
        <div>
            {
                inventarrs.map(value => <Inventar key = {value.id} item = {value} url={ url } /> )
            }
            <Route path={'/inventars/:id'} component={inventtarDetails}/>
        </div>
    )
}

