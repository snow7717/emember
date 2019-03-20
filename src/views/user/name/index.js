import { Toast } from 'mint-ui'
export default {
	name: 'userName',
	data() {
		return {
		}
	},
	computed: {
		user() {
			return this.$store.state.user
		}
	},
	components: {
	},
	methods: {
		back() {
			this.$router.back()
		},
		/**修改用户名**/
		edit(){
			this.$http.get('/api/static/data/user/name.json',{params: {name: this.user.name}}).then((res) => {
				Toast({
					message: res.data.message
				})
				this.$store.dispatch('userShow')
				let t = setTimeout(() => {
					this.$router.push('/user')
				},2000)
			})
		}
	}
}