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
			noticeShow: true,
			notices: [],
			searchName: '',
			address: '0',
			doctors: []
		}
	},
	created() {
		this.noticeIndex()
		this.doctorIndex()
	},
	methods: {
		back() {
			this.$router.back()
		},
		go(url){
			this.$router.push(url)
		},
		noticeIndex() {
			this.$http.get('/static/data/notice.json').then((res) => {
				this.notices = res.data.notices
			})
		},
		doctorIndex() {
			this.$http.get('/static/data/doctor.json').then((res) => {
				this.doctors = res.data.doctors
			})
		}
	},
	components: {
		scroll,
		star
	}
}