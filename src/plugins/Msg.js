import Vue from 'vue'
import Msg from '../components/Msg'

const MsgConstructor = Vue.extend(Msg)

export default {
  /**
   * 使用Vue.use挂载插件的时候会执行install方法
   * @param Vue Vue类
   * @param options Vue.use时传入的参数
   */
  install (Vue, options) {
    Vue.prototype.$msg = function ({ type = 'info', content = 'message' } = {}) {
      // 生成Msg组件的实例，传入参数
      const msgInstance = new MsgConstructor({
        // 这个属性对应组件的props
        propsData: {
          type,
          content,
        },
        // 这个属性对应组件的data
        data: {},
      })
      msgInstance.$mount()
      document.body.appendChild(msgInstance.$el)
      return msgInstance
    }
  },
}
