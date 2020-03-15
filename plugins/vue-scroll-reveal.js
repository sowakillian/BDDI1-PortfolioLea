import Vue from 'vue'
import VueScrollReveal from 'vue-scroll-reveal';


// OR specifying custom default options for all uses of the directive
Vue.use(VueScrollReveal, {
  duration: 1000,
  distance: '70px',
  origin: 'bottom',
  easing: 'ease-in',
});
