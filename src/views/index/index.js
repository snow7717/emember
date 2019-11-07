import { Toast } from 'mint-ui'

export default {
	name: 'index',
	data() {
		return {
			member: {
				cardNo: '',
				comName: '',
				total: '',
				useful: '',
				level: '',
				barcodeImg: ''
			},
			selected: ''
		}
	},
	created() {
		this.userInit()
		this.index()
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
		},
		userInit() {
			this.$store.commit('userId',this.$route.params.openid)
	  	this.$store.dispatch('userShow')
	  	if(this.user.phone == ''){
				Toast({
					message: '您还未绑定手机号，请先绑定手机号',
					position: 'bottom',
					duration: 5000
				})
				setTimeout(() => {
					this.$router.push('/user/phone')
				},2000)
			}
		},
		index() {
			this.$http.post('/member/load',{openid: this.$store.state.user.openid}).then((res) => {
				if(res.data.retcode == '1'){
				  this.member = res.data.data
				}else{
					Toast({
						message: res.data.retmsg
					})
				}
			})
		}
	},
	components: {}
}