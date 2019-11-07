import star from '@/components/star/index.vue'
import calendar from "vue-calendar-component"
import { Toast } from 'mint-ui'

export default {
	name: 'reserveShow',
	data() {
		return {
		  doctor: {},
      plans: [],
			shop: '',
			address: '',
			start_at: '',
			end_at: '',
			form: {
				openid: this.$store.state.user.openid,
				schedule: '',
				booktime: '',
				name: '',
				gender: '男',
				phone: '',
				age: '',
				intro: ''
			},
			reserveText: '请先选择日期',
			genderVisible: false
		}
	},
	watch: {
		'form.booktime'(val, oldVal){
			let choseDay = this.plans.filter((item) => {
				return item.date == val
			})[0]
			if(choseDay){
				if(parseInt(choseDay.expected) > parseInt(choseDay.appointed)){
					this.reserveText = '可以预约'
				}else{
					this.reserveText = '名额已满'
				}
			}else{
				this.reserveText =  '无坐诊计划'
			}
		},
		'form.gender'(val,oldVal){
			this.genderVisible = false
		}
	},
	computed: {
		user() {
			return this.$store.state.user
		},
		/*phoneVerify() {
			return /^1[34578]\d{9}$/.test(this.form.phone) ? true : false
		},*/
		ageVerify() {
			return /^\d+(?=\.{0,1}\d+$|$)/.test(this.form.age) ? true : false
		},
		submitAble() {
			return this.reserveText == '可以预约' && this.form.name != '' && this.ageVerify && this.form.intro != '' ? true : false
		}
	},
	created() {
		this.index()
		this.show()
  },
	methods: {
		back() {
			this.$router.back()
		},
		// 获取坐诊计划
		index() {
			this.$http.post('/regist/doctorDetailsCalendar',{id: this.$route.params.id}).then((res) => {
				console.log(res)
				for(let plan of res.data.data){
					this.plans.push({
						id: plan.id,
						date: plan.date,
						start_at: plan.startTime,
						end_at: plan.endTime,
						expected: plan.limited,
						appointed: plan.number,
						shop: plan.name,
						address: plan.address,
						className: parseInt(plan.limited) > parseInt(plan.number) ? 'not-full' : 'full'
					})
				}
			})
		},
		show() {
			this.$http.post('/regist/doctorDetails',{id: this.$route.params.id}).then((res) => {
				this.doctor = res.data.data
			})
		},
		save() {
			let id = this.plans.filter((item) => {
				return item.date == this.form.booktime
			})[0].id
			this.form.schedule = id 
			this.$http.post('/regist/makeAppointment',this.form).then((res) => {
				Toast({
					message: res.data.retmsg
				})
				if(res.data.retcode == '1'){
					this.$router.push('/reserve/mine')
				}
			})
		},
		clickDay(day) {
			this.form.booktime = day
		  let plan = this.plans.filter((item) => {
				return item.date == day
			})[0]
			this.shop = plan.shop
			this.address = plan.address
			this.start_at = plan.start_at
			this.end_at = plan.end_at
    },
	},
	components: {
		calendar,
		star
	}
}