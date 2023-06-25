import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

import ToastPlugin from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-default.css';


/* add icons to the library */
library.add(faLocationDot)
library.add(faEnvelope)
library.add(faInstagram)
library.add(faPhone)
library.add(faBars)

import 'bootstrap/dist/css/bootstrap.css'
createApp(App).use(router).use(ToastPlugin).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
import 'bootstrap/dist/js/bootstrap.js'
