<template>
  <div class='main'>
	  <div class='card f-cb'>
		  <mt-cell v-bind:title="member.id" v-bind:value="member.name" class='cell'></mt-cell>
			<section class='f-tac'>
				<img v-bind:src='member.code' class='code-image'>
			</section>
			<dl class='info f-tac f-fl w-33'>
			  <dt>累计积分</dt>
				<dd>{{member.score.total}}</dd>
			</dl>
			<dl class='info f-tac f-fl w-34'>
			  <dt>可用积分</dt>
				<dd>{{member.score.able}}</dd>
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
			<dl class='w-25 f-fl f-csp'>
			  <dt class='color-c45590 iconfont'>&#xe635;</dt>
				<dd>查看门店</dd>
			</dl>
		</div>
		<mt-button size="large" type='default' class='logout'>退出登录</mt-button>
	</div>
</template>

<style lang='sass' scoped>
@import '~@/assets/css/variable.scss'
@import './index.scss'
</style>

<script src='./index.js'></script>