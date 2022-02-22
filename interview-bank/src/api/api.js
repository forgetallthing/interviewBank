import request from './request';

//获取题目
export function getQuestion(param) {
    return request({
        url: '/question/getQuestion',
        method: 'get',
        param,
    });
}

//新增或修改题目
export function saveQuestion(param) {
    return request({
        url: '/question/saveQuestion',
        method: 'post',
        param,
    });
}

//删除题目
export function delQuestion(param) {
    return request({
        url: '/question/delQuestion',
        method: 'post',
        param,
    });
}
