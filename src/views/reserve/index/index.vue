<template>
  <div>
	  <mt-header title="预约管理" class='header' v-bind:fixed='true'>
			<mt-button icon="back" slot='left' v-on:click='back'></mt-button>
			<router-link to="/reserve/mine" slot="right">我的预约</router-link>
		</mt-header>
		<div class='banner f-tac'>
			<mt-swipe v-bind:auto="4000">
				<mt-swipe-item v-for='(item,index) in banners' v-bind:key='index'>
					<img v-bind:src="item.img" alt="">
				</mt-swipe-item>
			</mt-swipe>
		</div>
		<div class='notice' v-show='noticeShow'>
		  <scroll v-bind:data='banners' v-bind:class-option="option" >
        <p v-for="(item,index) in banners" v-bind:key="index" class='f-tal'>
          {{item.text}}
        </p>
		  </scroll>
			<button type='button' class='close f-fwb' title='关闭' v-on:click='noticeShow = false'>X</button>
		</div>
		<mt-search v-model="searchName" class='search' cancel-text="取消" placeholder="搜索店铺/医师"></mt-search>
		<div class='doctor-wrapper' v-for='(item,index) in doctors' v-if='item.name.indexOf(searchName) != -1 || item.shopName.indexOf(searchName) != -1'>
			<div class='headpic'>
				<img v-bind:src='item.img'>
			</div>
			<div class='doctor-info f-fs2'>
				<header class='doctor-info-header f-cb'>
					<h5 class='doctor-name f-fl f-fs2'>{{item.name}}</h5>
					<star v-bind:size='36' v-bind:score='item.grade' class='doctor-star f-fl'></star>
					<mt-button type="primary" size='small' class='f-fr' v-on:click='go(`/reserve/show/${item.id}`)'>预约</mt-button>
				</header>
				<p class='doctor-level f-fwb'>{{item.title}}</p>
				<p class='f-fs1'>{{item.hospital}}</p>
				<dl class='f-fs1'>
					<dt class='f-ib'>诊疗费</dt>
					<dd class='f-ib'>{{item.fee}}</dd>
				</dl>
				<dl class='f-fs1'>
					<dt class='f-ib'>擅长疾病</dt>
					<dd class='f-ib'>
						{{item.skill}}
					</dd>
				</dl>
				<dl class='f-fs1'>
					<dt class='f-ib'>接诊累计数量</dt>
					<dd class='f-ib'>{{item.num}}</dd>
				</dl>
			</div>
		</div>
	</div>
</template>

<style lang='sass' scoped>
@import '~@/assets/css/variable.scss'
@import './index.scss'
</style>

<script src='./index.js'></script>