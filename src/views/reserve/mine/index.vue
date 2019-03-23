<template>
  <div>
	  <mt-header title="我的预约" class='header' v-bind:fixed='true'>
		  <mt-button icon="back" slot='left' v-on:click='back'></mt-button>
		</mt-header>
		<mt-cell v-for='(item,index) in reserves' v-bind:key='index' v-bind:title="item.shopname + ' / ' + item.doctorName" v-bind:label="item.bookTimeString" v-bind:value='"状态/费用：" + item.status + " / " + "¥" + item.fee'></mt-cell>
	</div>
</template>

<style lang='sass' scoped>
@import '~@/assets/css/variable.scss'
@import './index.scss'
</style>

<script src='./index.js'></script>