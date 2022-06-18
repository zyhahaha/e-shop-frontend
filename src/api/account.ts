import request from '@/libs/request';

export function AccountLogin (data: any) {
    return request({
        url: '/user/login',
        method: 'post',
        data
    });
}

export function AccountRegister (data: any) {
    return request({
        url: '/user/register',
        method: 'post',
        data
    });
}
