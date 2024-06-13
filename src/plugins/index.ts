import type { App } from 'vue'

interface EagerLoadedModule {
  default: (app: App) => void
}
//这里定义了一个类型 EagerLoadedModules，它是一个键值对对象，
//键是字符串，值是 EagerLoadedModule 类型。
type EagerLoadedModules = Record<string, EagerLoadedModule>

// 自动引入所有模块

export const useAllPlugins = (app: App) => {
  // 使用 import.meta.glob 函数来引入所有模块
  /**
   * 这里使用 import.meta.glob 方法来动态导入所有以 .ts 结尾的模块，
   * 并且设置 eager: true 表示 同步 加载这些模块并返回一个包含模块路径和模块内容的对象。
   */
  const modules: EagerLoadedModules = import.meta.glob('./*.ts', { eager: true })
  // console.log('modules', modules)
  // 循环遍历所有导入的模块
  for (const FileName in modules) {
    // console.log('FileName', FileName)
    if (typeof modules[FileName].default === 'function') {
      //检查模块的文件名是否不等于 ./index.ts，避免重复加载入口文件
      if (FileName != './index.ts') {
        modules[FileName].default(app)
      }
    }
  }
}
/**
 * 这段代码的作用是自动加载所有以 .ts 结尾的模块，并且调用这些模块中的 default 方法，
 * 让这些模块可以在 Vue 应用程序中生效。
 */
