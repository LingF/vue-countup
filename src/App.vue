<template>
  <span ref="countup"></span>
</template>

<script>
import props from './props';
import { CountUp } from 'countup.js';
export default {
  name: 'countup-demo',
  props: {
    value: {
      type: Number,
      required: true
    },
    auto: {
      type: Boolean,
      default: false
    },
    complete: {
      type: Function
    },
    ...props
  },
  watch: {
    value: {
      handler: 'initCountUp'
    }
  },
  mounted(){
    this.initCountUp();
  },
  methods: {
    initCountUp() {
      const options = {
        startVal: this.startVal,
        decimalPlaces: this.decimalPlaces,
        duration: this.duration,
        useGrouping: this.useGrouping,
        useEasing: this.useEasing,
        separator: this.separator,
        decimal: this.decimal,
        prefix: this.prefix,
        suffix: this.suffix
      };
      this.instance = new CountUp(
        this.$refs.countup, 
        this.value,
        options
      );
      this.auto && this.start();
    },
    start(callback) {
      const { instance } = this;
      if (!instance.error) {
        instance.start(callback);
      } else {
        console.error(instance.error);
      }
    },
    pauseResume() {
      this.instance.pauseResume();
    },
    update(value) {
      this.instance.update(value);
    },
    reset() {
      this.instance.reset();
    }
  }
}
</script>