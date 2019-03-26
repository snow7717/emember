export default {
	name: 'reserveMine',
	data() {
		return {
			reserves: [],
			contentH: 0
		}
	},
	created() {
		this.index()
	},
	computed: {
		user() {
			return this.$store.state.user
		}
	},
	mounted() {
  },
	methods: {
		back() {
			this.$router.back()
		},
		/** 获取预约列表 **/
		index() {
			this.$http.post('/member/myrecord', {openid: this.user.openid}).then((res) => {
				this.reserves = res.data.data.bookRecords
			})
		}
	}
}