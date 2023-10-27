import { Endpoints } from "./apiEndPoints"
import axios from 'axios';


function authHeader(){
   
    const content_type = 'application/json';
    return {
            "Content-Type": "application/json"
        };
}

export const getService=(url,{thenCB,catchCB,finallyCB})=>{
        const requestHeader= authHeader();

    axios.get(Endpoints.base + url,{
                    mode: 'no-cors',
        headers:requestHeader
    })
        .then((res)=>thenCB(res))
        .catch((err)=>catchCB(err))
        .finally(()=>finallyCB());
}

