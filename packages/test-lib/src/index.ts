export { default as TestComponent } from './Component.vue'

export default {
    install(app, options = {}) {
        console.log('Providing some stuff to app')
        console.log('Applying some custom options', options)
    }
}