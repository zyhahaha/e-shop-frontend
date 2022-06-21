import request from '@/libs/request';

/**
 * 商品列表
 * @param {string} pageIndex 当前是第几页
 * @param {string} pageSize 每页多少条
 * @returns 
 */
export function QueryProductList (data: any) {
    return request({
        url: '/product/list',
        method: 'post',
        params: data
    });
}

/**
 * 商品详情
 * @param {string} id 商品id
 * @returns 
 */
export function QueryProductDetail(id: string) {
    return request({
        url: `/product/${id}`,
        method: 'get',
    });
}
