export default {
	name: 'auth',
	data() {
		return {}
	},
	methods: {
    auth(){
			let [comid,appid,pageid] = [
				this.$route.params.comId,
				this.$route.params.appId,
				this.$route.params.pageId
			]      
			window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid='+appid+'&redirect_uri=http%3A%2F%2Fdzhy.ysk360.com%2Fserver%2Fwe%2Fauth%2F'+comid+'&response_type=code&scope=snsapi_userinfo&state='+pageid+'#wechat_redirect'
    }
  },
	created() {
		this.auth()
	}
}