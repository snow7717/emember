export default {
	name: 'index',
	data() {
		return {
			member: {
				id: '158109640',
				name: '漱玉平民大药房',
				score: {
					total: 1024,
					able: 24
				},
				level: '普通',
				code: '/static/img/code.gif'
			},
			selected: ''
		}
	},
	created() {
		this.$store.dispatch('userShow')
	},
	computed: {
		user() {
			return this.$store.state.user
		}
	},
	methods: {
		/** 页面跳转 **/
		go(url) {
			this.$router.push(url)
		}
	},
	components: {}
}