<template>
  <ul class='stars' v-bind:class='starType'>
	  <li v-for='star in stars' class='star' v-bind:class='star'></li>
	</ul>
</template>

<style lang='stylus'>
@import '~@/assets/css/mixin.styl'
@import './index.styl'		
</style>

<script src='./index.js'></script>