# vue-simple-countup

> 用vue简单封装的 CountUp.js。Vue.js component wrap for CountUp.js

简单易用、追踪了目标值变化、添加自动启动；
支持 CountUp.js 的大部分选项。

## Installation

```bash
$ npm install --save vue-simple-countup
```

## Usage

```html
<simple-count-up ref="myCountUp" v-model.number="endVal" :auto="!0"></simple-count-up>
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
      endVal: 5555
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
| v-model | value | Number | *required* |
| auto | autostart | Boolean | `false` |

more options see [countUp.js#Options](https://github.com/inorganik/countUp.js#Options) 

### Not Support Options
| Property | Description |
| -----------------  | ---------------- |
| smartEasingThreshold | *not support* |
| smartEasingAmount | *not support* |
| easingFn | *not support* |
| formattingFn | *not support* |
| numerals | *not support* |

## Methods
| Method Name | Description | Example |
| :--------: | ----- | ----- |
| start | start the countUp | simpleCountUp.start(completeMethod) |
| pauseResume | pause/resume the countUp | simpleCountUp.pauseResume() |
| update | update value | simpleCountUp.update(6666) |
| reset | reset the countUp | simpleCountUp.reset() |
