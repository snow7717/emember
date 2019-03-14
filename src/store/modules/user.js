import Vue from 'vue'
import axios from 'axios'
import { Toast } from 'mint-ui'

// initial state
const state = {
}

// getters
const getters = {
}

// actions
const actions = {
	userShow(context){
		axios.get('/api/static/data/user/index.json').then((res) => {
			if(res.data.isSuccess){
				context.commit('userShow',res.data.user)
			}else{
				Toast({
					message: res.data.message
				})
			}
		})
	}
}

// mutations
const mutations = {
	userShow(state, user){
		state.name = user.name
		state.sex = user.sex
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