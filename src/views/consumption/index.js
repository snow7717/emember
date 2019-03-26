import moment from 'moment'

export default {
	name: 'consumpion',
	data() {
		return {
			consumptions: [],
			range: {
				start: moment('2018-09-09').format('YYYY-MM-DD'),
				end: moment(new Date()).format('YYYY-MM-DD')
			},
			page: {
				current: 1,
				total: 1,
				pageSize: 5
			},
			contentH: 0
		}
	},
	created() {
		this.index(1)
	},
	computed: {
		isAllLoaded() {
			return this.page.current == this.page.total ? true : false
		},
		user() {
			return this.$store.state.user
		}
	},
	mounted() {
    this.$nextTick(() => {
      this.contentH = document.documentElement.clientHeight - 
      this.$refs.wrapper.getBoundingClientRect().top
    })
  },
	methods: {
		back() {
			this.$router.back()
		},
		/** 获取消费列表 **/
		index(page) {
			this.$http.post('/member/consumeRecord',{pageNo: page, pageSize: this.page.pageSize, startDate: this.range.start, endDate: this.range.end,openid: this.user.openid}).then((res) => {
				this.consumptions = this.consumptions.concat(res.data.rows)
				this.page.total = Math.ceil(res.data.total / this.page.pageSize)
			})
		},
		/** 打开日期选择器 **/
		openPicker(rangeType) {
      this.$refs[rangeType].open()
    },
		dateStartFilter(val){
			this.range.start = moment(val).format('YYYY-MM-DD')
			this.consumptions = []
			this.index(1)
		},
		dateEndFilter(val){
			this.range.end = moment(val).format('YYYY-MM-DD')
			this.consumptions = []
			this.index(1)
		},
		loadTop() {
			//重置分页为1
			this.page.current = 1
			this.consumptions = []
			this.index(this.page.current)
      this.$refs.loadmore.onTopLoaded()
    },
		loadBottom() {
			this.index(this.page.current+1)
			this.page.current ++
      this.$refs.loadmore.onBottomLoaded()
		}
	}
}