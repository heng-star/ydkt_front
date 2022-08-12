
// 定义成员：
const sum = function(a,b){
    return parseInt(a) + parseInt(b)
}
const subtract = function(a,b){
    return parseInt(a) - parseInt(b)
}

// 导出成员：
module.exports = {
    sum: sum,
    subtract: subtract
}

export function getList() {
    console.log('获取数据列表')
}
export function save() {
    console.log('保存数据')
}