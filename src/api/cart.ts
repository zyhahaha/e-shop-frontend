import request from '@/libs/request';

/**
 * 购物车列表
 * @param {string} pageIndex 当前是第几页
 * @param {string} pageSize 每页多少条
 * @param {string} user_id 用户id
 * @returns 
 */
export function QueryCartList(data: any) {
    return request({
        url: '/cart/list',
        method: 'post',
        data
    });
}

/**
 * 新增购物车商品
 * @param {string} user_id 用户id
 * @param {string} product_id 商品id
 * @param {string} quantity 商品数量
 * @returns 
 */
export function CreateCart(data: any) {
    return request({
        url: '/cart',
        method: 'post',
        data
    });
}

/**
 * 更新购物车商品数量
 * @param {string} id 购物车id
 * @param {string} quantity 商品数量
 * @returns 
 */
export function UpdateCartWithProductCount(data: any) {
    return request({
        url: `/cart/${data.id}`,
        method: 'patch',
        data
    });
}

/**
 * 删除购物车商品
 * @param {string} id 购物车id
 * @returns 
 */
export function DeleteCartWithProduct(id: string) {
    return request({
        url: `/cart/${id}`,
        method: 'delete'
    });
}
