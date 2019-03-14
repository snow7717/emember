<template>
  <mt-tabbar v-model="selected" fixed>
		<mt-tab-item id="user" >
			<i slot='icon' class='iconfont'>&#xe643;</i>
			个人资料
		</mt-tab-item>
		<mt-tab-item id="consumption">
			<i slot='icon' class='iconfont'>&#xe646;</i>
			消费明细
		</mt-tab-item>
		<mt-tab-item id="score">
			<i slot='icon' class='iconfont'>&#xe652;</i>
			积分明细
		</mt-tab-item>
		<mt-tab-item id="shop">
			<i slot='icon' class='iconfont'>&#xe635;</i>
			查看门店
		</mt-tab-item>
	</mt-tabbar>
</template>

<style lang='sass' scoped>
@import './index.scss'
</style>

<script src='./index.js'></script>