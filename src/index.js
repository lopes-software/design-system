import * as components from './components'

const componentsList = components?.default

const DesignSystemComponents = {
  install(Vue) {
    Object.keys(componentsList).forEach(name => {
      // Adds ds prefix to all exported components
      Vue.component("Ds" + name, componentsList[name])
    })
  }
}

export default DesignSystemComponents
