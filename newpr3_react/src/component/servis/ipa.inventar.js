import axios from 'axios'

let option = {
    baseURL: 'https://api.sampleapis.com/futurama'
}
const axiosInstance = axios.create(option)

let getInventory = () =>{
    return axiosInstance.get('/inventory')
}
export {getInventory}
