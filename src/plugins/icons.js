import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faArrowLeft,
  faVolumeUp,
  faVolumeMute,
  faComment,
  faCubes,
  faCode,
  faMobileAlt,
  faSortDown
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faArrowLeft,
  faVolumeUp,
  faVolumeMute,
  faComment,
  faCubes,
  faCode,
  faMobileAlt,
  faSortDown
)
Vue.component('font-awesome-icon', FontAwesomeIcon)
