<template>
  <div>
	  <mt-header title="地址管理" class='header' v-bind:fixed='true'>
		  <mt-button icon="back" slot='left' v-on:click='back'></mt-button>
		</mt-header>
    <mt-cell title="省市区:" v-bind:value="user.area" is-link @click.native="handlerArea"></mt-cell>
    <mt-cell title="街道:" v-bind:value="user.street" is-link @click.native="handlerStreet"></mt-cell>
    <mt-popup v-model="areaVisible" class="w-100 f-tac" position="bottom">
      <mt-picker :slots="slots" @change="onValuesChange"></mt-picker>
    </mt-popup>
    <mt-popup v-model="streetVisible" class="w-100 f-tac" position="bottom">
      <mt-picker :slots="slotstree" @change="onStreeChange" textAlign='center'></mt-picker>
    </mt-popup>
		<section class='f-tac'>
			<mt-button type="primary" size='large' v-on:click='update'>保存</mt-button>
		</section>
  </div>
</template>

<style lang='sass' scoped>
@import '~@/assets/css/variable.scss'
@import './index.scss'
</style>

<script src='./index.js'></script>