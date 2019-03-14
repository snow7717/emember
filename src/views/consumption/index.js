export default {
	name: 'consumpion',
	data() {
		return {
			consumptions: []
		}
	},
	created() {
		this.index()
	},
	methods: {
		/** 获取消费列表 **/
		index() {
			this.$http.get('/api/static/data/consumption.json').then((res) => {
				this.consumptions = res.data.consumption
			})
		}
	}
}