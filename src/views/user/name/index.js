import { Toast } from 'mint-ui'
export default {
	name: 'userName',
	data() {
		return {
			form: this.$store.state.user
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
			this.$store.dispatch('userEdit')
		}
	}
}