import axios from 'axios'
import service from './contactApi'
//service循环遍歷輸出不同的請求方法
let instance = axios.create({
    baseURL: 'http://localhost:9000/api',
    timeout: 1000,
})
const Http = {};//包裹請求方法的容器

for (let key in service) {
    //key代表contactApi.js裡面的每個請求方法
    let api = service[key];//url method

    Http[key] = async function (
        params,
        isFormData = false,
        config = {},
    ) {
        //    ley res= await axios.get('url')
        //    ley res2= await axios.get('url')
        // let res =null
        // try{
        //     let res =await axios.get('url')
        // }catch(err){
        //     res=err
        // }
        let url = api.url
        let newParams = {}
        //content-type是否是form-data的判斷
        if (params && isFormData) {
            newParams = new params()
            for (let i in newParams) {
                newParams.append(key, params[key])
            }
        } else {
            newParams = params
        }
        //不同請求的判斷
        let response = {}//請求的返回值
        if (api.method === 'put' || api.method === 'post' || api.method === 'patch') {
            //格式：let res =await axios.get('url') 其中axios.get和axios[get]是相同的
            try {
                response = await instance[api.method](api.url, newParams, config)
            } catch (err) {
                response = err
            }
        }else if(api.method==='delete'){
            
        }
    }
}
