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
			center: {lng: 0, lat: 0},
      zoom: 3,
  		location: '济南',
			postionMap: {
				lat: '36.6575283084', 
				lng: '117.0038431770'
			},
			shops: [
				
			],
			add: {
				jd: '',
				wd: '',
				site: ''
			}
		}
	},
	created() {
		
	},
	methods: {
    handler ({BMap, map}) {
			let geolocation = new BMap.Geolocation()
      geolocation.getCurrentPosition((res) => {
				this.center.lng = res.point.lng
				this.center.lat = res.point.lat
				this.zoom = 14
      },{enableHighAccuracy: true})
			
			let currentPoint = new BMap.Point(this.center.lng, this.center.lat)
			this.$http.get('/api/static/data/shop.json').then((res) => {
				this.shops = res.data.shop
				let shoPiont
				for(let shop of this.shops){
					shoPiont = new BMap.Point(parseFloat(shop.lng),parseFloat(shop.lat))
					shop.distance = (map.getDistance(currentPoint, shoPiont) / 1000).toFixed(2) + 'm'
				}
			})
    },
		handleInfoWindowOpen(item){
			item.show = true
			for(let shop of this.shops){
				shop.active = false
			}
			item.active = true
		}
  }
}