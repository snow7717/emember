<template>
  <div class='main'>
	  <mt-header title="电子会员" class='header' v-bind:fixed='true'></mt-header>
	  <div class='card f-cb'>
		  <mt-cell v-bind:title="member.cardNo" v-bind:value="member.comName" class='cell'></mt-cell>
			<section class='f-tac'>
				<img v-bind:src='member.barcodeImg' class='code-image'>
			</section>
			<dl class='info f-tac f-fl w-33'>
			  <dt>累计积分</dt>
				<dd>{{member.total}}</dd>
			</dl>
			<dl class='info f-tac f-fl w-34'>
			  <dt>可用积分</dt>
				<dd>{{member.useful}}</dd>
			</dl>
			<dl class='info f-tac f-fl w-33'>
			  <dt>会员等级</dt>
				<dd>{{member.level}}</dd>
			</dl>
		</div>
		<div class='tabbar-mine f-tac f-cb'>
		  <dl class='w-25 f-fl f-csp' v-on:click='go("/user")'>
			  <dt class='color-f54100 iconfont'>&#xe643;</dt>
				<dd>个人资料</dd>
			</dl>
			<dl class='w-25 f-fl f-csp' v-on:click='go("/consumption")'>
			  <dt class='color-41f500 iconfont'>&#xe646;</dt>
				<dd>消费明细</dd>
			</dl>
			<dl class='w-25 f-fl f-csp' v-on:click='go("/integral")'>
			  <dt class='color-0043f5 iconfont'>&#xe652;</dt>
				<dd>积分明细</dd>
			</dl>
			<dl class='w-25 f-fl f-csp' v-on:click='go(`/shop/${user.openid}`)'>
			  <dt class='color-c45590 iconfont'>&#xe635;</dt>
				<dd>查看门店</dd>
			</dl>
		</div>
	</div>
</template>

<style lang='sass' scoped>
@import '~@/assets/css/variable.scss'
@import './index.scss'
</style>

<script src='./index.js'></script>