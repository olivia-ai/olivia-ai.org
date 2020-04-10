import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faArrowLeft,
  faVolumeUp,
  faVolumeMute,
  faComment,
  faComments,
  faCubes,
  faCode,
  faMobileAlt,
  faMapPin,
  faEnvelope,
  faCalendar,
  faUser,
  faTimes,
  faLayerGroup,
  faTags,
  faClock,
  faPercentage,
  faReplyAll,
  faClone
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faArrowLeft,
  faVolumeUp,
  faVolumeMute,
  faComment,
  faComments,
  faCubes,
  faCode,
  faMobileAlt,
  faMapPin,
  faEnvelope,
  faCalendar,
  faUser,
  faTimes,
  faLayerGroup,
  faTags,
  faClock,
  faPercentage,
  faReplyAll,
  faClone
)
Vue.component('font-awesome-icon', FontAwesomeIcon)
