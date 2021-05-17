import {useEffect, useState} from "react";
import {getInventorry} from "../services/ipa.invertars";
import Inventar from "./inventar";
import "./style.invertar/style.inventory.css"



export default function Inventars (props) {
    let  {match:{url}} = props
    console.log(props)
    let [inventtar,setInvettar] = useState([])

    useEffect(() => {
        getInventorry().then(value => setInvettar([...value.data]))
    },[])

    return (

        <div className={'box-oll-inventar'}>
            <div className={'box-inventtar'}>
                {
                    inventtar.map(value => <Inventar key={value.id} item={value}  url = {url}/>)
                }
            </div>

        </div>


    )
    }
