import axios from "axios";
import { URL } from "./constants/Constants";


const instance = axios.create({
  baseURL : URL
})

instance.interceptors.request.use((config)=>{
  
  const token = localStorage.getItem("token")

  if (token) {
    config.headers.Authorization = token
  
  }

  return config

})

instance.interceptors.response.use ((response)=>{
  return response;
},
 (error) =>{
  localStorage.removeItem("token")

 }
)

  export default instance