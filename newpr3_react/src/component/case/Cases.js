import {useEffect, useState} from "react";
import {getCase} from "../servis/ipa.case";
import Caste from "./Case";
import {Route} from "react-router-dom";
import caseDetails from "./caseDetails";

export default function Casts(props) {
    let {match:{url}} = props
    console.log(props)
    let [castes,setCastes] = useState([])
    useEffect(()=>{
        getCase().then(value => setCastes(value.data)
        )
    },[])
    return (
        <div>
            {
                castes.map(value => <Caste key = {value.id} items = {value} url ={url}/>)
            }
            <Route path={'/casts/:id'} component={caseDetails}/>
        </div>
    );
}