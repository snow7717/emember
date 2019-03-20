<template>
  <div>
	  <mt-header title="消费明细" class='header' v-bind:fixed='true'>
			<mt-button icon="back" slot='left' v-on:click='back'></mt-button>
		</mt-header>
	  <div class='range f-cb'>
		  <section class='range-start' v-on:click='openPicker("pickerStart")'>
	      <mt-cell title="日期筛选" v-bind:value="range.start" ></mt-cell>
			</section>
			<section class='range-end' v-on:click='openPicker("pickerEnd")'>
		    <mt-cell v-bind:value="range.end"></mt-cell>
			</section>
		</div>
		<div ref="wrapper" v-bind:style="{height: contentH + 'px'}" style="overflow: scroll;">
			<mt-loadmore v-bind:top-method="loadTop" v-bind:bottom-method="loadBottom" ref="loadmore" v-bind:bottom-all-loaded="isAllLoaded" v-bind:auto-fill='false'>
				<mt-cell v-for='(item,index) in consumptions' v-bind:key='index' v-bind:title="'单号:' + item.id" v-bind:label="item.time" v-bind:value='"¥" + item.spend'></mt-cell>
			</mt-loadmore>
		</div>
		<mt-datetime-picker ref="pickerStart" type="date" v-bind:value='range.start' v-bind:endDate='new Date(range.end)' v-on:confirm='dateStartFilter'></mt-datetime-picker>
		<mt-datetime-picker ref="pickerEnd" type="date" v-bind:startDate='new Date(range.start)' v-bind:endDate='new Date()' v-bind:value='range.end' v-on:confirm='dateEndFilter'></mt-datetime-picker>
	</div>
</template>

<style lang='sass' scoped>
@import '~@/assets/css/variable.scss'
@import './index.scss'
</style>

<script src='./index.js'></script>