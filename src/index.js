import * as components from './components'

export { components }



export default {
  install: (app) => {
    Object.keys(components).forEach(name => {
      app.component(components[name])
    })
  }
}
