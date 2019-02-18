import Vue from 'vue'
// import App from './App'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCoffee)
library.add(faUser)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false