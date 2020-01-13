import Vue from 'vue'
import App from './App.vue'
//import { createProvider } from './vue-apollo'

Vue.config.productionTip = false

new Vue({
data(){
  return {
    info: null
  }
},
//mounted () {
 //// .get ("https://www.random.org/integers/?num=10&min=1&max=6&col=1&base=10&format=plain&rnd=new")
  //  .then (response => (this.info = response))

  render: h => h(App)
}).$mount('#app')
