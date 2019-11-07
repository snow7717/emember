<template>
  <div>
	  <mt-header title="预约详情" class='header' v-bind:fixed='true'>
			<mt-button icon="back" slot='left' v-on:click='back'></mt-button>
		</mt-header>
		<div class='doctor-wrapper'>
		  <div class='headpic'>
				<img v-bind:src='doctor.img'>
			</div>
			<div class='doctor-info f-fs2'>
				<header class='doctor-info-header f-cb'>
				  <h5 class='doctor-name f-fl'>{{doctor.name}}</h5>
					<star v-bind:size='36' v-bind:score='doctor.grade' class='doctor-star f-fl'></star>
				</header>
				<p class='doctor-level f-fwb'>{{doctor.title}}</p>
				<dl class='f-fs1 f-ib'>
					<dt class='f-ib'>诊疗费</dt>
					<dd class='f-ib'>{{doctor.fee}}</dd>
				</dl>
				<dl class='f-fs1'>
					<dt class='f-ib'>擅长疾病</dt>
					<dd class='f-ib'>
						{{doctor.skill}}
					</dd>
				</dl>
				<p class='f-fs1'>{{doctor.intro}}</p>
			</div>
		</div>
		<calendar ref="Calendar" v-bind:markDateMore="plans" v-on:choseDay="clickDay" class='mt-10'></calendar>
		<mt-cell v-bind:title="shop" v-bind:value="address"></mt-cell>
		<mt-cell v-bind:title="form.booktime + ' ' + start_at + ' -' + end_at" v-bind:value="reserveText">
		</mt-cell>
		<mt-field label="姓名" v-model="form.name" v-bind:state="form.name == '' ? 'error' : 'success'"></mt-field>
		<section v-on:click='genderVisible = true'>
		  <mt-cell title="性别" is-link v-bind:value="form.gender"></mt-cell>
		</section>
		<mt-field label="年龄" type="number" v-model="form.age" v-bind:state="ageVerify ? 'success' : 'error'"></mt-field>
		<mt-field label="电话" type="tel" v-model="form.phone" v-bind:state="phoneVerify ? 'success' : 'error'"></mt-field>
		<mt-field label="病情简述" type="textarea" rows="4" v-model="form.intro" v-bind:state='form.intro == "" ? "error" : "success"'></mt-field>
		<mt-popup v-model="genderVisible" position="bottom" class='w-100'>
			<mt-radio v-model="form.gender" v-bind:options="['男', '女']"></mt-radio>
		</mt-popup>
		<section class='f-tac'>
		  <mt-button type="primary" size='large' v-bind:disabled='!submitAble' v-on:click='save'>预约</mt-button>
		</section>
	</div>
</template>

<style lang='sass' scoped>
@import '~@/assets/css/variable.scss'
@import './index.scss'
</style>

<script src='./index.js'></script>