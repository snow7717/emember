import Vue from 'vue'
import scroll from 'vue-seamless-scroll'
import star from '@/components/star/index.vue'

export default {
	name: 'reserve',
	data() {
		return {
			option: {
        step: .2,
        limitMoveNum: 1,
        openTouch: false,
        waitTime: 1,
        direction: 1,
				singleHeight: 30,
      },
			shops: [],
			banners: [],
			noticeShow: true,
			searchName: '',
			doctors: [],
			shopVisible: false
		}
	},
	created() {
		this.bannerIndex()
		this.shopIndex()
		this.doctorIndex()
	},
	computed: {
		user() {
			return this.$store.state.user
		}
	},
	methods: {
		back() {
			this.$router.back()
		},
		go(url){
			this.$router.push(url)
		},
		bannerIndex() {
			this.$http.post('/regist/activityPicture',{openid: this.user.openid}).then((res) => {
				this.banners = res.data.data
			})
		},
		shopIndex() {
			this.$http.post('/regist/shopSearch',{openid: this.user.openid}).then((res) => {
				for(let item of res.data.data){
					this.shops.push(item.name)
				}
			})
		},
		doctorIndex() {
			this.$http.post('/regist/doctorList',{name: '', openid: this.user.openid, shop: parseInt(this.$route.params.id)}).then((res) => {
				this.doctors = res.data.data
			})
		}
	},
	components: {
		scroll,
		star
	}
}