const express = require('express')
const path = require('path')

const configViewEngine = (app) => {
    app.set('views', path.join('./src', 'views'))
    app.set('view engine', 'ejs')

    // Config static file. /static is prefix of static resource. Example: /static/images/vandong.png
    app.use('/static', express.static(path.join('./src', 'public')))
}

// module.exports: xác định giá trị xuất ra từ module. Một mô-đun chỉ có thể xuất ra một đối tượng duy nhất qua nó thôi
// Dùng require để nhập mô-đun 
module.exports = configViewEngine; // CommonJS (NodeJs) <=> export default
// CommonJS là một module system (hệ thống mô-đun) được thiết kế để giúp tổ chức và tái sử dụng mã trong JavaScript, 
// đặc biệt khi chạy trong môi trường server-side như Node.js.