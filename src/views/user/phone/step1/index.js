import { Toast } from 'mint-ui'
export default {
	name: 'userPhone1',
	data() {
		return {
			phone: '',
			ecode: '',
			vcode: '',
			countdown: 0
		}
	},
	components: {
	},
	computed: {
		user() {
			return this.$store.state.user
		},
		phoneVerify() {
			return /^1[34578]\d{9}$/.test(this.phone) ? true : false
		},
		btntext() {
			return this.countdown == 0 ? '获取验证码' : `${this.countdown}s后重新发送`
		},
		ableSend() {
			return this.countdown == 0 && this.phoneVerify == true ? true : false
		},
		state() {
			return this.phoneVerify == true ? 'success' : 'error'
		}
	},
	created() {
	},
	watch: {},
	methods: {
		back() {
			this.$router.back()
		},
		/** 发送手机验证码 **/
		sendCode() {
			this.countdown = 60
			this.$http.get('/api/static/data/user/name.json',{params: {phone: this.user.phone}}).then((res) => {
				Toast({
					message: res.data.message
				})
				if(res.data.isSuccess){
					this.vcode = res.data.vcode
					let count = setInterval(() => {
						if(this.countdown > 0){
							this.countdown--
						}else{
							clearInterval(count)
						}
					},1000)
				}else{
					this.countdown = 0
				}
			})
		},
		/** 更新手机号 **/
		update() {
			if(this.ecode == this.vcode){
				this.$http.get('/api/static/data/user/name.json',{params: {phone: this.user.phone}}).then((res) => {
					Toast({
						message: res.data.message,
						duration: 2000
					})
					if(res.data.isSuccess){
						this.$store.dispatch('userShow')
						let t = setTimeout(() => {
							this.$router.push('/user')
						},2000)
					}
				})
			}else{
				Toast({
					message: '手机验证码输入不正确，请重新输入'
				})
			}
		}
	}
}