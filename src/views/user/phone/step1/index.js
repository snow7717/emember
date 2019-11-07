import { Toast } from 'mint-ui'
export default {
	name: 'userPhone1',
	data() {
		return {
			ecode: '',
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
			return /^1[34578]\d{9}$/.test(this.user.phone) ? true : false
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
			this.$http.post('/sendSms',{phone: this.user.phone,openid: this.$route.params.openid}).then((res) => {
				Toast({
					message: res.data.retmsg
				})
				if(res.data.retcode == '1'){
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
			this.$http.post('/bindPhone',{phone: this.user.phone, passcode: this.ecode, openid: this.$route.params.openid}).then((res) => {
				Toast({
					message: res.data.retmsg,
					duration: 1000
				})
				if(res.data.retcode == '1'){
					setTimeout(() => {
						this.$router.push(`/index/${this.$route.params.openid}`)
					},1500)
				}
			})
		}
	}
}