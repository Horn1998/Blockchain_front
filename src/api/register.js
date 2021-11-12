import request from "./axios"  // 导入配置好的axios文
export function sendVerificationEmail(params) {
    return request({
        url: '/register/send-verification-email',
        method: 'get',
        params
    })
}


export function checkUsername(params) {
    return request({
        url: '/register/check-username',
        method: 'get',
        params
    })
}

export function registerForMiner(data) {
    return request({
        url: '/register/register-for-miner',
        method: 'post',
        data
    })
}

export function registerForClient(data) {
    return request({
        url: '/register/register-for-client',
        method: 'post',
        data
    })
}


export function checkEmail(params) {
    return request({
        url: '/register/check-email',
        method: 'get',
        params
    })
}

export function resetPass(data) {
    return request({
        url: '/register/reset-pass',
        method: 'post',
        data
    })
}