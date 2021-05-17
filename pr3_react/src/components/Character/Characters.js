
import {useEffect, useState} from "react";
import {getCharacter1} from "../services/ipa.characters";
import Character from "./Character";
import "./style/style.caracter.css"

export default function Characters (){

    let [character1,setCharacter1] = useState([]);
    let [singlCaracter,setSinglCharacter] = useState(null)
    useEffect(()=>{
        getCharacter1().then(value =>setCharacter1([...value.data]))
    },[])

    let findedID = (id) =>{
        let finded = character1.find(value => value.id === id)
        setSinglCharacter(finded)
    }
    return (
        <div className={'box-oll-character'}>
            <div className={'box-character1'}>
                {
                character1.map(value => <Character key={value.id} item={value} findedID = {findedID}/>)
                }
            </div>
            <div className={'box-singlCaracter'}>
                {
                    singlCaracter ? (<div className={'box-pars'}>
                        <h2>{singlCaracter.name} </h2>
                        <h4> ID -{singlCaracter.id} </h4>
                        <h4> Born - '{singlCaracter.born}'</h4>
                        <h4> {singlCaracter.bio.url} </h4>
                    </div>) : (<div>
                        <h2>undefined</h2></div>)
                }

            </div>
        </div>
    )
}


