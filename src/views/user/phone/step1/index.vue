<template>
  <div>
	  <mt-header title="手机号管理" class='header' v-bind:fixed='true'>
		  <mt-button icon="back" slot='left' v-on:click='back'></mt-button>
		</mt-header>
		<mt-field placeholder="输入新手机号" v-model="phone" v-bind:state="state"></mt-field>
		<mt-field placeholder="手机验证码" v-model="ecode">
		  <mt-button type="primary" size='small' v-on:click='sendCode' v-bind:disabled='ableSend == false'>{{btntext}}</mt-button>
    </mt-field>
		<mt-button type="primary" size='small' class='w-100 p-10' v-bind:disabled='ecode.length != 6' v-on:click='update'>绑定</mt-button>
	</div>
</template>

<style lang='sass' scoped>
@import './index.scss'
</style>

<script src='./index.js'></script>