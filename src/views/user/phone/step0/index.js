import { Toast } from 'mint-ui'
export default {
	name: 'userPhone',
	data() {
		return {
			ecode: '',
			vcode: '',
			countdown: 0,
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
		/** 跳转进入下一页面 **/
		nexter(){
			if(this.ecode == this.vcode){
				this.$router.push('/user/phone1')
			}else{
				Toast({
					message: '验证码输入不正确，请重新输入'
				})
			}
		}
	}
}