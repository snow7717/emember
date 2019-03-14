import { Toast } from 'mint-ui'

// 导入数据
import data from '@/assets/data/data.json'

let index = 0
let index1 = 0
let index2 = 0

// 获取所有省
let province = data.map(res  => {
	return res.name
})
// 获取选中省下面的所有市
let city = data[index].childs.map(res => {
  return res.name
})
// 获取选中市下面的所有区
let area = data[index].childs[index1].childs.map(res => {
  return res.name
})
// 获取选中区下面的所有街道(乡镇)
let street = data[index].childs[index1].childs[index2].childs.map(res => {
  return res.name
})
		
export default {
  name: 'userAddress',
  data() {
    return {
      areaVisible: false,
      streetVisible: false,
      area: '',
      street: '',
      slots: [{
        flex: 1,
        values: province,
				defaultIndex: 0,
        className: 'slot1',
        textAlign: 'center'
      }, {
        flex: 1,
        values: [],
				defaultIndex: 0,
        className: 'slot3',
        textAlign: 'center'
      },  {
        flex: 1,
        values: [],
				defaultIndex: 0,
        className: 'slot5',
        textAlign: 'center'
      }],
      slotstree: [{
        flex: 1,
        values: [],
				defaultIndex: 0,
        className: 'slot1',
        textAlign: 'center'
      }]
    }
  },
	computed: {
		user() {
			return this.$store.state.user
		}
	},
	created() {
		this.init()
	},
  methods: {
		back() {
			this.$router.go(-1)
		},
		/** 设置默认选中值 **/
		init() {
			let address = this.user.area.split(',')
			let cprovince, ccity, carea
			
			cprovince = data.find((value, index, arr) => {
				return value.name == address[0]
			})
			this.slots[0].defaultIndex = data.findIndex((value,index,arr) => {
				return value.name == address[0]
			})	
			
			ccity = cprovince.childs.find((value, index, arr) => {
				return value.name == address[1]
			})
			this.slots[1].values = cprovince.childs.map((res) => {
				return res.name
			})
			this.slots[1].defaultIndex = cprovince.childs.findIndex((value,index,arr) => {
				return value.name == address[1]
			})
			
			this.slots[2].values = ccity.childs.map((res) => {
				return res.name
			})
			carea = ccity.childs.find((value, index, arr) => {
				return value.name == address[2]
			})
			this.slots[2].defaultIndex = ccity.childs.findIndex((value,index,arr) => {
				return value.name == address[2]
			})
			
			this.slotstree[0].values = carea.childs.map((res) => {
				return res.name
			})
			console.log(this.user.street)
			this.slotstree[0].defaultIndex = carea.childs.findIndex((value,index,arr) => {
				return value.name == this.user.street
			})
		},
		
		/** 显示地区选择弹框 **/
    handlerArea() {
      this.areaVisible = true
    },
		
    handlerStreet() {
      if (this.slotstree[0].values.length === 0) {
        this.street = '无可选街道'
        return
      }
      this.streetVisible = true
    },
		
    onValuesChange(picker, values) {
      let one = values[0]
      let two = values[1]
      let three = values[2]
      index = province.indexOf(one)
      if (index >= 0 && province.length > 0) {
        city = data[index].childs.map(res => {
          return res.name
        })
        picker.setSlotValues(1, city)
        two = values[1]
      }

      index1 = city.indexOf(two)
      if (index1 >= 0 && city.length > 0) {
        area = data[index].childs[index1].childs.map(res => {
          return res.name
        })
        picker.setSlotValues(2, area)
        three = values[2]
      }
      index2 = area.indexOf(three)
      if (index >= 0 && index1 >= 0 && index2 >= 0) {
        street = data[index].childs[index1].childs[index2].childs.map(res => {
          return res.name
        })
        this.slotstree[0].values = street
      }

      if (index1 === -1 || index2 === -1) {
        this.street = '无可选街道'
      }
      this.area = values.join(',')
    },
    onStreeChange(picker, values) {
      this.street = values.join(',')
    },
		/** 保存修改 **/
		update() {
			let address = {
				area: this.area,
				street: this.street
			}
			this.$http.get('/api/static/data/user/name.json',{params: {address: address}}).then((res) => {
				Toast({
					message: res.data.message,
					duration: 2000
				})
				this.$store.dispatch('userShow')
				this.init()
			})
		}
  }
}