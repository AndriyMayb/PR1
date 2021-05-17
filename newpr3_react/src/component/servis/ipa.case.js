import axios from 'axios';
let option = {
    baseURL: 'https://api.sampleapis.com/futurama'
};
let axiosInstances = axios.create(option);
let getCase = () =>{
    return  axiosInstances.get('/cast')
}
export {getCase}