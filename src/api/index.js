import axios from 'axios'
// 引入axios
// 定义ul地址
const baseUrl = "http://localhost:8888/api/private/v1/"
axios.defaults.baseURL = baseUrl

// 登录验证
export const checkUser = params=>{
    return axios.post('login', params).then(res => res.data)
}
// export const checkUser = axios.post(baseUrl, params)
