import {useEffect, useState} from "react";



export default function DetailsUser(props) {

    let [DetailsUser,setDetailsUser] = useState([])
    let {match:{params:{id}},location:{state}} = props
    console.log(props)
useEffect(()=>{
            setDetailsUser(state)
},[id])


    return (

       <div>

           {
               DetailsUser.JSON.stringify()
           }
       </div>
    );
}