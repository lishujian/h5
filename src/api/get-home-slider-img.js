import axios from 'axios';

export const getImg = ()=>{     //获取图片api
    return axios.get('http://www.imooc.com/api/home/slider').then((res)=>{
        console.log(res.data.slider)    
    if(res.data.code == 0){
            return res.data;
            
        }
    })
}