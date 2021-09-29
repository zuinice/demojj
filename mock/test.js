// 导入mock
const Mock = require('mockjs')

// 调用Mock的方法，生成模拟数据

// 生成一个用户名，*出现1-10次
// var data = Mock.mock({ 'username|1-10': '*' })

// 生成一个用户名，*出现5次
// var data = Mock.mock({ 'username|5': '*' })

// 生成一个年龄，年龄在18-40岁中间
// var data = Mock.mock({ 'age|18-40': 0 })

// 随机生成一个id
// var data = Mock.mock('@id()')

// 随机生成一个中文名称
// var data = Mock.mock('@cname()')

// 随机生成一个日期
// var data = Mock.mock('@date("yyyy-MM-dd")')

// 随机生成一段描述
// var data = Mock.mock('@paragraph()')

// 随机生成一个邮箱地址
var data = Mock.mock('@email()')

console.log(data);