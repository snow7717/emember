<template>
  <div class='main'>
		<baidu-map class="map" v-bind:center="center" v-bind:zoom="zoom" v-on:ready="handler">
			<bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
			<bm-marker v-for='(item,index) in shops' v-bind:key='index' v-bind:position="{lat: item.lat, lng: item.lng}" v-on:click='handleInfoWindowOpen(item)'>
				<bm-info-window v-bind:show="item.show" v-on:close="item.show = false" v-on:open="item.show = true" v-bind:width='0' v-bind:height='0' v-bind:autoPan='true' class='map-info-window'>
					<mt-cell v-bind:title="item.name" v-bind:label="item.address"></mt-cell>
					<dl class='f-fs1'>
					  <dt class='f-ib'>营业时间</dt>
						<dd class='f-ib'>{{item.business}}</dd>
					</dl>
					<dl class='f-fs1'>
					  <dt class='f-ib'>联系方式</dt>
						<dd class='f-ib'>{{item.phone}}</dd>
					</dl>
					<dl class='f-fs1'>
					  <dt class='f-ib'>医保类型</dt>
						<dd class='f-ib'>{{item.type}}</dd>
					</dl>
				</bm-info-window>
			</bm-marker>
		</baidu-map>
		<div v-for='(item,index) in shops' v-bind:key='index' v-on:click='handleInfoWindowOpen(item)' >
		  <mt-cell  v-bind:title="item.name" v-bind:label="item.address + ' （距离：' + item.distance + '）'"  class='f-csp' v-bind:class='item.active ? "active" : ""'>
		    <mt-button type="default" size='small'>预约</mt-button>
			  <mt-button type="primary" size='small'>去这里</mt-button>
		  </mt-cell>
		</div>
	</div>	
</template>

<style lang='sass' scoped>
@import '~@/assets/css/variable.scss'
@import './index.scss'
</style>

<script src='./index.js'></script>