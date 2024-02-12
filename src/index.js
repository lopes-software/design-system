import * as components from './components'

export { components }

const DesignSystemComponents = {
  install(Vue) {
    Object.keys(componentsList).forEach(name => {
      Vue.component(componentsList[name])
    })
  }
}

export default {
  install: (app) => {
    Object.keys(components).forEach(name => {
      app.component(components[name])
    })
  }
}
