import {useEffect, useState} from "react";

export default function caseDetails(props) {
    let {match:{params:{id}},location:{state}} = props
    console.log(props)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    let [caseeDetails,setCaseeDetails] = useState(null)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(()=>{
setCaseeDetails(state)
    },[id])
    return (
        <div>
            {
                caseeDetails && JSON.stringify(caseeDetails)
            }

        </div>
    );
}