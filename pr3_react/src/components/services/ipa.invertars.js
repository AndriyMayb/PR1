
import axios from "axios";
let invOption = {
    baseURL: 'https://api.sampleapis.com/futurama'
};
let axiosInstances = axios.create(invOption);
let getInventorry = () =>{
    return axiosInstances.get('/inventory')
}
let getInventory = () => {
    return axiosInstances.get('/inventory')
}
export {getInventorry,getInventory}



