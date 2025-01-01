import axios from "axios";

export const axiosInstance=axios.create({
    baseURL: 'https://shoaibghulam.pythonanywhere.com'
    // baseURL: 'http://127.0.0.1:8000'
    
})


axiosInstance.interceptors.request.use((res)=>{
    
    if(res){

        res.headers.Authorization="Bearer " + localStorage.getItem('token');
    }
    
    return res;
},(err)=>{
    if(err.response.data.message==="Unauthenticated"){
    
       
      localStorage.removeItem('token');
     

    }
    throw err
})