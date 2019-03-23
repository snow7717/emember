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
		}
	},
	watch: {
		'user.gender'(val,oldval){
			if(oldval == undefined){
			}else{
				this.genderVisible = false
			  this.update()
			}
		}
	}
}