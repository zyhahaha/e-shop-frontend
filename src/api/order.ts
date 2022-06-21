import request from '@/libs/request';

/**
 * 订单列表
 * @param {string} pageIndex 当前是第几页
 * @param {string} pageSize 每页多少条
 * @param {string} user_id 用户id
 * @returns 
 */
export function QueryOrderList(data: any) {
    return request({
        url: '/order/list',
        method: 'post',
        data
    });
}

/**
 * 订单详情
 * @param {string} id 订单id
 * @returns 
 */
export function QueryOrderDetail(id: string) {
    return request({
        url: `/order/${id}`,
        method: 'get',
    });
}

/**
 * 创建订单
 * @param {string} user_id 用户id
 * @param {string} product_list 商品列表< eg: [{"id":2,"quantity":33}] >
 * @returns 
 */
export function CreateOrder(data: any) {
    return request({
        url: '/order',
        method: 'post',
        data
    });
}

/**
 * 提交订单
 * @param {string} id 订单id
 * @returns 
 */
export function ConfirmOrder(id: string) {
    return request({
        url: `/order/confirm/${id}`,
        method: 'post'
    });
}

/**
 * 更新订单状态
 * @param {string} id 订单id
 * @param {string} status 订单状态
 * @returns 
 */
export function UpdateOrderStatus(data: any) {
    return request({
        url: `/order/${data.id}`,
        method: 'patch',
        data
    });
}
