import { ProxyDash } from "../dash-state.js"
import { Task } from "../models/Task.js"

// @ts-ignore

const api = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/'
})

class SandboxService {
	async getBackdrop(){
		let res = await api.get(`/images`)
		console.log('images res:', res)
		return res
	}
	async getWeather(){
		let res = await api.get(`/weather`)
		console.log('weather res:', res)
		return res
	}
	async getQuote(){
		let res = await api.get(`/quotes`)
		console.log('quotes res:', res)
		return res
	}
		async getTasks(){
		let user = ProxyDash.user.shift()
		let username = user.name
		ProxyDash.user.unshift(user)
		let res = await api.get(`${username}/todos`)
		.then(res => {
			return res
		})
		console.log('task res:', res)
		return res.data
	}
	async putComplete(id){
		let user = ProxyDash.user.shift()
		let username = user.name
		ProxyDash.user.unshift(user)
		var task = ProxyDash.tasks.find(t => t.id === id)
		task.completed = !task.completed
		console.log(ProxyDash.tasks)
		let res = await api.put(`${username}/todos/${id}`, task)
		console.log('put res:', res)
	}
	async deleteTask(id){
		
		let user = ProxyDash.user.shift()
		let username = user.name
		ProxyDash.user.unshift(user)
		await api.delete(`${username}/todos/${id}`)
		
	}

	async postTask(task){
		let user = ProxyDash.user.shift()
		let username = user.name
		ProxyDash.user.unshift(user)
		let res = await api.post(`${username}/todos/`,{
			description: task.description,
		})
		console.log('push task res:', res)
		console.log(ProxyDash.tasks)

	}
	}

export const sandboxService = new SandboxService()