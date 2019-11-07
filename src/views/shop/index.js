import Vue from 'vue'
import BaiduMap from 'vue-baidu-map'

Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.comconsole/key */
  ak: 'nnuFPzPy3rGg61UcHCGP4FAbw6tpWq91'
})

export default {
	name: 'shop',
	data() {
		return {
			center: {
				"lat": "", 
			  "lng": "",
			},
			walkingShow: '',
      zoom: 3,
  		location: '济南',
			shops: [],
			add: {
				jd: '',
				wd: '',
				site: ''
			},
			currentPoint: '',
			targetPoint: '',
			geolocation: '',
			point: ''
		}
	},
	created() {
		this.$store.commit('userId',this.$route.params.openid)
		this.$store.dispatch('userShow')
	},
	computed: {
		user() {
			return this.$store.state.user
		}
	},
	methods: {
		go(url) {
			this.$router.push(url)
		},
		back() {
			this.$router.back()
		},
    handler ({BMap, map}) {
			this.geolocation = new BMap.Geolocation()
			let _this = this
      this.geolocation.getCurrentPosition((res) => {
				var ggPoint = new BMap.Point(res.point.lng, res.point.lat)
				var convertor = new BMap.Convertor()
			  var pointArr = []
				pointArr.push(ggPoint)
				convertor.translate(pointArr, 1, 5, (data) => {
					if(data.status === 0) {
						_this.center.lng = data.points[0].lng
						_this.center.lat = data.points[0].lat
						_this.zoom = 14
						_this.currentPoint = new BMap.Point(_this.center.lng, _this.center.lat)
						_this.$http.post('/shop/reload',{openid: _this.user.openid, lat: _this.center.lat, lng: _this.center.lng, maxDistance: '20000'}).then((res) => {
							_this.shops = res.data.data.nearShops
							for(let shop of this.shops){
								_this.$set(shop,'show',false)
								shop.point = new BMap.Point(parseFloat(shop.longitude),parseFloat(shop.latitude))
								shop.distance = (map.getDistance(_this.currentPoint, shop.point)).toFixed(0) + 'm'
							}
						})
					}
				})
      },{enableHighAccuracy: true})
    },
		handleInfoWindowOpen(item){
			item.show = true
			for(let shop of this.shops){
				shop.active = false
			}
			item.active = true
		},
		gofor(index){
			this.walkingShow = index
		}
  }
}