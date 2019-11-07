import { Toast } from 'mint-ui'
export default {
	name: 'user',
	data() {
		return {
			genderVisible: false,
			startDate: new Date('1950-01-01')
		}
	},
	components: {},
	created() {
		this.show()
	},
	computed: {
		user() {
			return this.$store.state.user
		},
		birthdayFormat() {
			return this.msToDate(this.user.birthday).withoutTime
		}
	},
	methods: {
		back() {
			this.$router.back()
		},
		show() {
			this.$store.dispatch('userShow')
		},
		/** 打开生日选择器 **/
		openPicker() {
      this.$refs.picker.open()
    },
		/** 修改生日/性别 **/
		update() {
			this.$store.dispatch('userEdit')
			setTimeout(() => {
				window.location.reload()
			},2000)
		},
		/** 转换日期格式 **/
		msToDate (msec) {
			let datetime = new Date(msec)
			let year = datetime.getFullYear()
			let month = datetime.getMonth()
			let date = datetime.getDate()
			let hour = datetime.getHours()
			let minute = datetime.getMinutes()
			let second = datetime.getSeconds()

			let result1 = year + '-' + ((month + 1) >= 10 ? (month + 1) : '0' + (month + 1)) + '-' + ((date + 1) < 10 ? '0' + date : date) + ' ' + ((hour + 1) < 10 ? '0' + hour : hour) + ':' + ((minute + 1) < 10 ? '0' + minute : minute) + ':' + ((second + 1) < 10 ? '0' + second : second)

			let result2 = year + '-' + ((month + 1) >= 10 ? (month + 1) : '0' + (month + 1)) + '-' + ((date + 1) < 10 ? '0' + date : date)

			let result = {
				hasTime: result1,
				withoutTime: result2
			}
			return result
		}
	},
	watch: {
		'user.gender'(val,oldval) {
			if(oldval == undefined){
			}else{
				this.genderVisible = false
			  this.update()
			}
		}
	}
}