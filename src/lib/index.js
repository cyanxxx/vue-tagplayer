import vueTagplayer from './vue-tagplayer.vue'
const tagplayer = {
    install(Vue, options) {
        Vue.component(vueTagplayer.name, vueTagplayer) 
    }
}
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(tagplayer);
}
export default tagplayer