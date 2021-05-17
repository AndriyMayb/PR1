import {useEffect, useState} from "react";


export default function inventtarDetails(props) {
    let {match:{params:{id}},location:{state}} = props
    // eslint-disable-next-line react-hooks/rules-of-hooks
    let [inventtarrDetails,setInventtarrDetails] = useState(null)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(()=>{
        setInventtarrDetails(state)
    },[id])
    return (

        <div>
            {
              inventtarrDetails && JSON.stringify(inventtarrDetails)
            }



        </div>
    );
}