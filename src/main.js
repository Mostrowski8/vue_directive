import Vue from 'vue'
import App from './App.vue'

const callbackHandler = (context, fn) => {
  let callbackFunction;
  if (context[fn]) {
    callbackFunction = context[fn];
  } else {
    callbackFunction = eval(fn);
  }
  
  callbackFunction.call();
}

Vue.directive('myon', {
  inserted: function (el, binding, vnode) {
    const fn = binding.expression;
    const context = vnode.context;
    const handler = () => callbackHandler(context, fn)
    el.addEventListener(binding.arg, handler);
  },
  unbind: function (el, binding) {
    el.removeEventListener(binding.arg, handler);
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})