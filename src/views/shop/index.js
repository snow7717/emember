import Vue from 'vue'
import BaiduMap from 'vue-baidu-map'

Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'nnuFPzPy3rGg61UcHCGP4FAbw6tpWq91'
})

export default {
	name: 'shop',
	data() {
		return {
			center: {
				"lat": "36.6705283084", 
			  "lng": "117.0138431770",
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
      this.geolocation.getCurrentPosition((res) => {
				//因为百度地图定位不准确 这个地方暂时先注释掉
				//this.center.lng = res.point.lng
				//this.center.lat = res.point.lat
				this.zoom = 14
      },{enableHighAccuracy: true})
			
			this.currentPoint = new BMap.Point(this.center.lng, this.center.lat)
			this.$http.get('/api/static/data/shop.json').then((res) => {
				this.targetPoint = new BMap.Point(parseFloat(res.data.shop[0].lng),parseFloat(res.data.shop[0].lat))
				this.shops = res.data.shop
				for(let shop of this.shops){
					shop.point = new BMap.Point(parseFloat(shop.lng),parseFloat(shop.lat))
					shop.distance = (map.getDistance(this.currentPoint, shop.point)).toFixed(2) + 'm'
				}
			})
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