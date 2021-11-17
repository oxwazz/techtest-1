import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueGoogleMaps from '@fawmi/vue-google-maps'


library.add(fas)

createApp(App).component("font-awesome-icon", FontAwesomeIcon).use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyDJ_E_5icUJyykUeOu4A1E1plmDpOxzSZ8',
    },
}).mount('#app')
