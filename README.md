# vue-simple-countup

> Vue.js component wrap for CountUp.js

## Installation

```bash
$ npm install --save vue-simple-countup
```

## Usage

```html
  <simple-count-up v-modle="endVal" :auto="!0"></simple-count-up>
```

```javascript
import Vue from 'vue';
import SimpleCountUp from 'vue-simple-countup';
Vue.component(SimpleCountUp.name, SimpleCountUp);

export default {
  name: 'app',
  computed: {
    simpleCountUp() {
      return this.$refs.myCountUp;
    }
  },
  data() {
    return {
      endVal: 2019
    }
  },
  methods: {
    handleClick() {
      // start where you want
      this.simpleCountUp.start();
    }
  }
}
```

## Options
| Property | Description | type |	default	|
| -----------------  | ---------------- | :--------: | :----------: |
| auto | autostart | Boolean | `false` |
| smartEasingThreshold | | | *not support* |
| smartEasingAmount | | | *not support* |
| easingFn | | | *not support* |
| formattingFn | | | *not support* |
| numerals | | | *not support* |
more see [countUp.js#Options](https://github.com/inorganik/countUp.js#Options) 

## Methods
| Method Name | Description |
| :--------: | ----- |
| start | start the countUp |
| pauseResume | pause/resume the countUp |
| update | update value |
| reset | reset the countUp |
