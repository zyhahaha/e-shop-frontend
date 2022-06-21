import request from '@/libs/request';

/**
 * 登录
 * @param {string} username 用户名
 * @param {string} password 密码
 * @returns 
 */
export function AccountLogin (data: any) {
    return request({
        url: '/user/login',
        method: 'post',
        data
    });
}

/**
 * 注册
 * @param {string} accountName 用户名
 * @param {string} password 密码
 * @param {string} repassword 确认密码
 * @param {string} mobile 手机号
 * @returns 
 */
export function AccountRegister (data: any) {
    return request({
        url: '/user/register',
        method: 'post',
        data
    });
}
