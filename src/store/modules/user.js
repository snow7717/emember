import Vue from 'vue'
import axios from 'axios'
import { Toast } from 'mint-ui'

// initial state
const state = {
	openid: ''
}

// getters
const getters = {
}

// actions
const actions = {
	userShow(context) {
		axios.post(`/api/member/info`,{openid: context.state.openid}).then((res) => {
			console.log(res)
			if(res.data.retcode == '1'){
				context.commit('userShow',res.data.data)
			}else{
				Toast({
					message: res.data.retmsg
				})
			}
		})
	},
	userEdit(context) {
		axios.post('/api/member/save',context.state).then((res) => {
			if(res.data.retcode == '1'){
				Toast({
					message: '更新成功'
				})
				context.dispatch('userShow')
			}else{
				Toast({
					message: '更新失败请稍后再试'
				})
			}
		})
	}
}

// mutations
const mutations = {
	userId(state, openid){
		state.openid = openid
	},
	userShow(state, user){
		state.name = user.name
		state.gender = user.gender
		state.birthday = user.birthday
		state.area = user.area
		state.street = user.street
		state.phone = user.phone
		//state = { ...user }
	}
}

export default {
  state,
  getters,
  actions,
  mutations
}