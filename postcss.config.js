// 此文件专门处理postcss插件
module.exports = {
  // 所有的postcss插件
  plugins: {
    // 自动给css样式添加前缀->兼容
    autoprefixer: {},
    'postcss-pxtorem': {
      rootValue: 37.5, // 基准值
      propList: ['*'] // 运用到那些文件 *所有文件
    }
  }
}
