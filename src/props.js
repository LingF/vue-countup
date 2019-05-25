const props = {
  startVal: {
    type: Number,
    default: 0
  },
  decimalPlaces: {
    type: Number,
    default: 0
  },
  duration: {
    type: Number,
    default: 2
  },
  useGrouping: {
    type: Boolean,
    default: true
  },
  useEasing: {
    type: Boolean,
    default: true
  },
  // smartEasingThreshold: {
  //   type: Number,
  //   default: 999
  // },
  // smartEasingAmount: {
  //   type: Number,
  //   default: 333
  // },
  separator: {
    type: String,
    default: ','
  },
  decimal: {
    type: String,
    default: '.'
  },
  // easingFn: {
  //   type: Function
  // },
  // formattingFn: {
  //   type: Function
  // },
  prefix: {
    type: String,
    default: ''
  },
  suffix: {
    type: String,
    default: ''
  },
  // numerals: {
  //   type: Array
  // }
}

export default props