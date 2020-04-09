const path = require('path');

const config = {
    entry: './src/index.js',
    output: {
        filename: 'build.js',
        path: path.resolve(__dirname, 'build'),// tạo đường dẫn tuyệt đối cho folder
    }
}

module.exports = config;