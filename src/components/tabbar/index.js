export default {
	name: 'tabbar',
	props: {
		selected: {
			type: String
		}
	},
	data() {
		return {
		}
	},
	watch: {
		selected(val,oldVal) {
			this.$router.push(`/${val}`)
		}
	}
}