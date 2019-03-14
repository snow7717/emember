<template>
  <div>
		<mt-cell title="当前绑定号码" v-bind:value="user.phone"></mt-cell>
		<mt-field placeholder="手机验证码" v-model="ecode">
		  <mt-button type="primary" size='small' v-on:click='sendCode' v-bind:disabled='ableSend == false'>{{btntext}}</mt-button>
    </mt-field>
		<mt-button type="primary" size='small' class='w-100 p-10' v-bind:disabled='ecode.length != 6' v-on:click='nexter'>下一步</mt-button>
	</div>
</template>

<style lang='sass' scoped>
@import './index.scss'
</style>

<script src='./index.js'></script>