<template>
  <div>
	  <mt-cell v-for='(item,index) in consumptions' v-bind:key='index' v-bind:title="'单号:' + item.id" v-bind:label="item.time" v-bind:value='"¥" + item.spend'></mt-cell>
	</div>
</template>

<style lang='sass' scoped>
@import '~@/assets/css/variable.scss'
@import './index.scss'
</style>

<script src='./index.js'></script>