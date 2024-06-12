/* eslint-env node */
// 加载模块解析插件
require('@rushstack/eslint-patch/modern-module-resolution')

// 导出配置对象
module.exports = {
  // 根路径
  root: true,
  // 扩展的配置
  extends: [
    // vue3-essential 插件
    'plugin:vue/vue3-essential',
    // eslint推荐插件
    'eslint:recommended',
    // standard 插件
    'standard',
    // vue/eslint-config-typescript 插件
    '@vue/eslint-config-typescript',
    // @vue/eslint-config-prettier/skip-formatting 插件
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  // 解析器选项
  parserOptions: {
    // ECMAScript版本
    ecmaVersion: 'latest'
  },
  // 规则
  rules: {
    //关闭了对未声明的变量的禁用规则
    'no-undef': ['off'],
    // 关闭了对 Vue 组件名称使用多个单词的要求。
    'vue/multi-word-component-names': ['off'],
    //关闭了使用全等（===）和不全等（!==）的要求
    eqeqeq: ['off']
  }
}
