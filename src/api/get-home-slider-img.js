import axios from 'axios';

//获取api图片资源
export const getImg = ()=>{     
    return axios.get('http://www.imooc.com/api/home/slider',{timeout:1000}).then((res)=>{
        console.log(res.data.slider)    
    if(res.data.code == 0){
            return res.data.slider; 
                  
        }
    throw new Error('没有接口信息返回');     
     }).catch((err)=>{
        if(err){
            console.log(err + '接口请求超时，没有返回接口对应的图片信息,使用默认照片')
        }
        return [
            {
                linkUrl: 'https://www.baidu.com',
                picUrl: require('../assets/img/404.png')
            }
        ];
    }).then( data => {   //延迟2s 才响应
        return new Promise( sueeccd => {
            setTimeout( ()=>{
                sueeccd(data);
            },2000)
        });

        
    })
}