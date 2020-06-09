import axios from 'axios';

export const gotImg = ()=>{
    return axios.get('http://www.imooc.com/api/home/slider').then(res=>{
        console.log(res.data)    
    if(res.data.code == 0){
            return res.data.slider;
            
        }
    })
}