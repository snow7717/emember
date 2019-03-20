export default {
  props: {
    size: {
      type: Number
    },
    score: {
      type: Number
    }
  },
  computed: {
    starType () {
      return 'star-' + this.size
    },
    // 计算星级指数
    stars () {
      let stars = []
      let score = Math.floor(this.score * 2) / 2
      let hasDecimal
      if (score % 1 === 0) {
        hasDecimal = false
      } else {
        hasDecimal = true
      }
      for (let i = 0; i < Math.floor(score); i++) {
        stars.push('star-on')
      }
      if (hasDecimal) {
        stars.push('star-half')
      }
      while (stars.length < 5) {
        stars.push('star-off')
      }
      return stars
    }
  }
}
