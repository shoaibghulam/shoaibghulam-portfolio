import { axiosInstance } from "../utils/axiosInstance"


export const allData =async ()=>{
    return await axiosInstance.get('/api')
    .then((res)=>{
     return res.data
    })
    .catch((err)=>{
        return err.response.data;
    })
}