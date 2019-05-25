import SimpleCountUp from './simpleCountUp.vue';
// 导出模块
export default SimpleCountUp;
//global 情况下 自动安装
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('simple-count-up', SimpleCountUp);
}