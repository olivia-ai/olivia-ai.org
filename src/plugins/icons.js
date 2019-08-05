import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faPaperPlane,
  faMicrophone,
  faComment,
  faVolumeUp,
  faVolumeMute,
  faClock,
  faCalendar,
  faLongArrowAltLeft,
  faAdjust,
  faArrowLeft,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faPaperPlane,
  faMicrophone,
  faComment,
  faVolumeMute,
  faVolumeUp,
  faClock,
  faCalendar,
  faLongArrowAltLeft,
  faAdjust,
  faArrowLeft,
  faArrowRight
)
Vue.component('font-awesome-icon', FontAwesomeIcon)
