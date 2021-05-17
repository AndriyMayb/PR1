
import {
    Link} from "react-router-dom";
export default function Inventar({item, url}) {
let path = url + '/' + item.id
    return (
        <div>
            {item.id}) {item.title}
            <Link to = {{pathname: path, state: item}}><button> Details </button> </Link>

        </div>
    );
}