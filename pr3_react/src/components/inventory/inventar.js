import {
    Link
} from "react-router-dom";

export default function Inventar ({item, url}) {
    return (
        <div className={'block3'}>
            <div className={'block4'}> {item.id}) {item.title}</div>
            <div>
                <Link to = {url + '/' + item.id}><button className={'block5'} >Details</button></Link>
            </div>
        </div>
    )
}