<template>
  <div>
	  <mt-header title="修改姓名" class='header' v-bind:fixed='true'>
		  <mt-button icon="back" slot='left' v-on:click='back'></mt-button>
		</mt-header>
	  <mt-field placeholder="请输入姓名" v-model="user.name"></mt-field>
		<mt-button type="primary" size='large' v-bind:disabled='user.name == ""' v-on:click='edit'>保存</mt-button>
	</div>
</template>

<style lang='sass' scoped>
@import './index.scss'
</style>

<script src='./index.js'></script>