import { Toast } from 'mint-ui'
export default {
	name: 'userPhone',
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
		btntext() {
			return this.countdown == 0 ? '获取验证码' : `${this.countdown}s后重新发送`
		},
		ableSend() {
			return this.countdown == 0 ? true : false
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
			this.$http.post('/sendSms',{phone: this.user.phone,openid: this.user.openid}).then((res) => {
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
		/** 跳转进入下一页面 **/
		nexter(){
			this.$http.post('/member/unbind',{openid: this.user.openid, passcode: this.ecode}).then((res) => {
				if(res.data.retcode == '0'){
					Toast({
						message: res.data.retmsg
					})
				}else if(res.data.retcode == '1'){
					this.$store.dispatch('userShow')
					this.$router.push('/user/phone1')
				}
			})
		}
	}
}