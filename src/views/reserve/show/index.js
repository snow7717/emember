import star from '@/components/star/index.vue'
import calendar from "vue-calendar-component"

export default {
	name: 'reserveShow',
	data() {
		return {
		  doctor: {
			  "name": "jenny",
			  "headPic": "/static/img/headpic.jpg",
			  "star": 3,
			  "level": "国家级老中医 博士生导师",
				"department": "内科",
			  "spend": 100,
			  "goodAts": ["失眠","三高","发烧","咳嗽"],
			  "intro": "从医近50年，熟读中医经典，精通中医内科外科皮肤科，依据古人制方原则，结合多年临床经验，创造了很多方剂和制剂。依据古人制方原则，结合多年临床经验，创造了很多方剂和制剂。"
			},
      plans: [
				{
					date: '2019/3/3',
					expected: 30,
					appointed: 25,
					className: 'not-full'
				},
				{
					date: '2019/3/5',
					expected: 30,
					appointed: 30,
					className: 'full'
				}
			],
			form: {
				date: '',
				name: '',
				sex: '男',
				phone: '',
				age: '',
				introduction: ''
			},
			reserveText: '请先选择日期',
			sexVisible: false,
			//submitAble: false
		}
	},
	watch: {
		'form.date'(val, oldVal){
			let choseDay = this.plans.filter((item) => {
				return item.date == val
			})[0]
			if(choseDay){
				if(choseDay.expected > choseDay.appointed){
					this.reserveText = '可以预约'
				}else{
					this.reserveText = '名额已满'
				}
			}else{
				this.reserveText =  '无坐诊计划'
			}
		},
		'form.sex'(val,oldVal){
			this.sexVisible = false
		}
	},
	computed: {
		phoneVerify() {
			return /^1[34578]\d{9}$/.test(this.form.phone) ? true : false
		},
		ageVerify() {
			return /^\d+(?=\.{0,1}\d+$|$)/.test(this.form.age) ? true : false
		},
		submitAble() {
			return this.reserveText == '可以预约' && this.form.name != '' && this.phoneVerify && this.ageVerify && this.form.introduction != '' ? true : false
		}
	},
	methods: {
		back() {
			this.$router.back()
		},
		show() {
		},
		clickDay(day) {
			this.form.date = day
    },
	},
	components: {
		calendar,
		star
	},
	created() {
  }
}