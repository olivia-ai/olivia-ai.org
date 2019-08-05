import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faArrowLeft,
  faComments
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faArrowLeft,
  faComments
)
Vue.component('font-awesome-icon', FontAwesomeIcon)
