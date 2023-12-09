import * as components from './components'

const componentsList = components?.default

const DesignSystemComponents = {
  install(Vue) {
    Object.keys(componentsList).forEach(name => {
      Vue.component(componentsList[name])
    })
  }
}

export default DesignSystemComponents
