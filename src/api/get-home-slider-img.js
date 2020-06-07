import axios from 'axios';

export const gotImg = ()=>{
    return axios.get('http://www.imooc.com/api/home/slider').then(data=>{
        if(data.data.code == 0){
            return data.data;
            
        }
    })
}