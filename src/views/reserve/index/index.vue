<template>
  <div>
	  <mt-header title="预约管理" class='header' v-bind:fixed='true'>
			<mt-button icon="back" slot='left' v-on:click='back'></mt-button>
			<router-link to="/reserve/mine" slot="right">我的预约</router-link>
		</mt-header>
		<div class='banner f-tac'>
			<mt-swipe v-bind:auto="4000">
				<mt-swipe-item>
					<img src="https://sfault-activity.b0.upaiyun.com/299/510/2995106733-59f96d9265f28_medium" alt="">
				</mt-swipe-item>
				<mt-swipe-item>
					<img src="https://sfault-activity.b0.upaiyun.com/299/510/2995106733-59f96d9265f28_medium" alt="">
				</mt-swipe-item>
				<mt-swipe-item>
					<img src="https://sfault-activity.b0.upaiyun.com/841/059/84105916-59c486322df6e_medium" alt="">
				</mt-swipe-item>
			</mt-swipe>
		</div>
		<div class='notice' v-show='noticeShow'>
		  <scroll v-bind:data='notices' v-bind:class-option="option" >
        <p v-for="(item,index) in notices" v-bind:key="index" class='f-tal'>
          {{item}}
        </p>
		  </scroll>
			<button type='button' class='close f-fwb' title='关闭' v-on:click='noticeShow = false'>X</button>
		</div>
		<mt-navbar v-model="address">
			<mt-tab-item id="0" class='f-csp'>全部门店</mt-tab-item>
			<mt-tab-item id="1" class='f-csp'>华山路店</mt-tab-item>
			<mt-tab-item id="2" class='f-csp'>经四路店</mt-tab-item>
			<mt-tab-item id="3" class='f-csp'>经五路店</mt-tab-item>
			<mt-tab-item id="4" class='f-csp'>南四环店</mt-tab-item>
		</mt-navbar>
		<mt-search v-model="searchName" class='search' cancel-text="取消" placeholder="搜索"></mt-search>
		<mt-tab-container v-model="address">
			<mt-tab-container-item id="0">
				<div class='doctor-wrapper' v-for='(item,index) in doctors' v-if='item.name.indexOf(searchName) != -1'>
				  <div class='headpic'>
					  <img v-bind:src='item.headPic'>
					</div>
					<div class='doctor-info f-fs2'>
					  <header class='doctor-info-header f-cb'>
						  <h5 class='doctor-name f-fl'>{{item.name}}</h5>
							<star v-bind:size='36' v-bind:score='item.star' class='doctor-star f-fl'></star>
							<mt-button type="primary" size='small' class='f-fr' v-on:click='go("/reserve/show")'>预约</mt-button>
						</header>
						<p class='doctor-level f-fwb'>{{item.level}}</p>
						<p class='f-fs1'>{{item.shop}}</p>
						<dl class='f-fs1'>
						  <dt class='f-ib'>诊疗费</dt>
							<dd class='f-ib'>{{item.spend}}</dd>
						</dl>
						<dl class='f-fs1'>
						  <dt class='f-ib'>擅长疾病</dt>
							<dd class='f-ib'>
							  <span v-for='goodAt in item.goodAts' v-bind:key='goodAt'>{{goodAt}}、</span>
							</dd>
						</dl>
						<dl class='f-fs1'>
						  <dt class='f-ib'>接诊累计数量</dt>
							<dd class='f-ib'>{{item.count}}</dd>
						</dl>
					</div>
				</div>
			</mt-tab-container-item>
			<mt-tab-container-item id="1">
				<div class='doctor-wrapper' v-for='(item,index) in doctors' v-if='item.shop == "华山路店" && item.name.indexOf(searchName) != -1'>
				  <div class='headpic'>
					  <img v-bind:src='item.headPic'>
					</div>
					<div class='doctor-info f-tal f-fs2'>
					  <header class='doctor-info-header f-cb'>
						  <h5 class='doctor-name f-fl'>{{item.name}}</h5>
							<star v-bind:size='36' v-bind:score='item.star' class='doctor-star f-fl'></star>
							<mt-button type="primary" size='small' class='f-fr'>预约</mt-button>
						</header>
						<p class='doctor-level f-fwb'>{{item.level}}</p>
						<p class='f-fs1'>{{item.shop}}</p>
						<dl class='f-fs1'>
						  <dt class='f-ib'>诊疗费</dt>
							<dd class='f-ib'>{{item.spend}}</dd>
						</dl>
						<dl class='f-fs1'>
						  <dt class='f-ib'>擅长疾病</dt>
							<dd class='f-ib'>
							  <span v-for='goodAt in item.goodAts' v-bind:key='goodAt'>{{goodAt}}、</span>
							</dd>
						</dl>
						<dl class='f-fs1'>
						  <dt class='f-ib'>接诊累计数量</dt>
							<dd class='f-ib'>{{item.count}}</dd>
						</dl>
					</div>
				</div>
			</mt-tab-container-item>
			<mt-tab-container-item id="2">
				<div class='doctor-wrapper' v-for='(item,index) in doctors' v-if='item.shop == "经四路店" && item.name.indexOf(searchName) != -1'>
				  <div class='headpic'>
					  <img v-bind:src='item.headPic'>
					</div>
					<div class='doctor-info f-tal f-fs2'>
					  <header class='doctor-info-header f-cb'>
						  <h5 class='doctor-name f-fl'>{{item.name}}</h5>
							<star v-bind:size='36' v-bind:score='item.star' class='doctor-star f-fl'></star>
							<mt-button type="primary" size='small' class='f-fr'>预约</mt-button>
						</header>
						<p class='doctor-level f-fwb'>{{item.level}}</p>
						<p class='f-fs1'>{{item.shop}}</p>
						<dl class='f-fs1'>
						  <dt class='f-ib'>诊疗费</dt>
							<dd class='f-ib'>{{item.spend}}</dd>
						</dl>
						<dl class='f-fs1'>
						  <dt class='f-ib'>擅长疾病</dt>
							<dd class='f-ib'>
							  <span v-for='goodAt in item.goodAts' v-bind:key='goodAt'>{{goodAt}}、</span>
							</dd>
						</dl>
						<dl class='f-fs1'>
						  <dt class='f-ib'>接诊累计数量</dt>
							<dd class='f-ib'>{{item.count}}</dd>
						</dl>
					</div>
				</div>
			</mt-tab-container-item>
			<mt-tab-container-item id="3">
				<div class='doctor-wrapper' v-for='(item,index) in doctors' v-if='item.shop == "经五路店" && item.name.indexOf(searchName) != -1'>
				  <div class='headpic'>
					  <img v-bind:src='item.headPic'>
					</div>
					<div class='doctor-info f-tal f-fs2'>
					  <header class='doctor-info-header f-cb'>
						  <h5 class='doctor-name f-fl'>{{item.name}}</h5>
							<star v-bind:size='36' v-bind:score='item.star' class='doctor-star f-fl'></star>
							<mt-button type="primary" size='small' class='f-fr'>预约</mt-button>
						</header>
						<p class='doctor-level f-fwb'>{{item.level}}</p>
						<p class='f-fs1'>{{item.shop}}</p>
						<dl class='f-fs1'>
						  <dt class='f-ib'>诊疗费</dt>
							<dd class='f-ib'>{{item.spend}}</dd>
						</dl>
						<dl class='f-fs1'>
						  <dt class='f-ib'>擅长疾病</dt>
							<dd class='f-ib'>
							  <span v-for='goodAt in item.goodAts' v-bind:key='goodAt'>{{goodAt}}、</span>
							</dd>
						</dl>
						<dl class='f-fs1'>
						  <dt class='f-ib'>接诊累计数量</dt>
							<dd class='f-ib'>{{item.count}}</dd>
						</dl>
					</div>
				</div>
			</mt-tab-container-item>
			<mt-tab-container-item id="4">
				<div class='doctor-wrapper' v-for='(item,index) in doctors' v-if='item.shop == "南四环店" && item.name.indexOf(searchName) != -1'>
				  <div class='headpic'>
					  <img v-bind:src='item.headPic'>
					</div>
					<div class='doctor-info f-tal f-fs2'>
					  <header class='doctor-info-header f-cb'>
						  <h5 class='doctor-name f-fl'>{{item.name}}</h5>
							<star v-bind:size='36' v-bind:score='item.star' class='doctor-star f-fl'></star>
							<mt-button type="primary" size='small' class='f-fr'>预约</mt-button>
						</header>
						<p class='doctor-level f-fwb'>{{item.level}}</p>
						<p class='f-fs1'>{{item.shop}}</p>
						<dl class='f-fs1'>
						  <dt class='f-ib'>诊疗费</dt>
							<dd class='f-ib'>{{item.spend}}</dd>
						</dl>
						<dl class='f-fs1'>
						  <dt class='f-ib'>擅长疾病</dt>
							<dd class='f-ib'>
							  <span v-for='goodAt in item.goodAts' v-bind:key='goodAt'>{{goodAt}}、</span>
							</dd>
						</dl>
						<dl class='f-fs1'>
						  <dt class='f-ib'>接诊累计数量</dt>
							<dd class='f-ib'>{{item.count}}</dd>
						</dl>
					</div>
				</div>
			</mt-tab-container-item>
		</mt-tab-container>
	</div>
</template>

<style lang='sass' scoped>
@import '~@/assets/css/variable.scss'
@import './index.scss'
</style>

<script src='./index.js'></script>