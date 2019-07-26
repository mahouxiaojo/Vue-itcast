import axios from 'axios'
// 引入axios  这个文件是用来发送请求和获取数据的
// 定义ul地址
const baseUrl = "http://localhost:8888/api/private/v1/"
axios.defaults.baseURL = baseUrl

// 添加请求拦截器
axios.interceptors.request.use(function(config){
    // 将token给到一个前后台约定好的key中，作为请求发送
    let token = localStorage.getItem('mytoken')
    if(token) {
        // 除了登录接口，其他所有接口请求头必须设置为Authorization=token (token为登录成功后服务器返回的认证token)
        config.headers['Authorization'] = token
        // 设置每次发送请求 都在请求头上添加token
    }
    return config
    },function(error){
        return Promise.reject(error)
    }
)


// 登录验证
export const checkUser = params => {
    return axios.post('login', params).then(res => res.data)
}

// 获取用户列表
export const getUser = params=>{
    return axios.get("users", params).then(res=>res.data)
}
