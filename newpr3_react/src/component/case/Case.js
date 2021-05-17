import {Link} from "react-router-dom";
export default function Caste ({items,url}) {
    let path = url + '/' + items.id

    return (
        <div>
            {items.id}) {items.name}
            <Link to = {{pathname: path, state : items}}> Details</Link>

        </div>
    );
}