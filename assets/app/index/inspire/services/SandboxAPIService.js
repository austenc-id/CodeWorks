import { ProxyDash } from "../dash-state.js"

// @ts-ignore
const sandboxApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/'
})

class SandboxService {
	async getBackdrop(){
		let res = await sandboxApi.get(`/images`)
		console.log('images res:', res)
		return res
	}
	async getWeather(){
		let res = await sandboxApi.get(`/weather`)
		console.log('weather res:', res)
		return res
	}
	async getQuote(){
		let res = await sandboxApi.get(`/quotes`)
		console.log('quotes res:', res)
		return res
	}
	async getTasks(){
		let res = await sandboxApi.get(`${ProxyDash.user}/todos`)
		console.log('task res:', res)
		return res
	}
}
export const sandboxService = new SandboxService()