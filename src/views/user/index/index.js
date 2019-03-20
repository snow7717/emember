import { Toast } from 'mint-ui'
export default {
	name: 'user',
	data() {
		return {
			sexVisible: false
		}
	},
	components: {},
	created() {
	},
	computed: {
		user() {
			return this.$store.state.user
		},
		form() {
			return this.$store.state.user
		}
	},
	methods: {
		back() {
			this.$router.back()
		},
		/** 修改性别 **/
		sexEdit(val){
			this.$http.get('/api/static/data/user/name.json',{params: {sex: val}}).then((res) => {
				Toast({
					message: res.data.message
				})
				this.$store.dispatch('userShow')
			})
		},
		/** 打开生日选择器 **/
		openPicker() {
      this.$refs.picker.open()
    },
		/** 修改生日 **/
		birthEdit(val) {
			this.$http.get('/api/static/data/user/name.json',{params: {birthday: val}}).then((res) => {
				Toast({
					message: res.data.message
				})
				this.$store.dispatch('userShow')
			})
		}
	},
	watch: {
		'user.sex'(val,oldval){
			if(oldval == undefined){
			}else{
				this.sexVisible = false
			  this.sexEdit(val)
			}
		}
	}
}