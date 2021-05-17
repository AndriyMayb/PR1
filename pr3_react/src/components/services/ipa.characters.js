import axios from 'axios'
let option = {
    baseURL: 'https://api.sampleapis.com/futurama'
}
let axiosInstance = axios.create(option)
let getCharacter1 = () =>{
    return axiosInstance.get('/cast')
}
export {getCharacter1}
