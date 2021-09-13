// @ts-ignore
const sandboxApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/'
})

class SandboxService {
	async getBackdrop(url){
		let res = await sandboxApi.get(`/images`)
		console.log('images res:', res)
		return res
	}
	async getWeather(url){
		let res = await sandboxApi.get(`/weather`)
		console.log('weather res:', res)
		return res
	}
	async getQuote(url){
		let res = await sandboxApi.get(`/quotes`)
		console.log('quotes res:', res)
		return res
	}
}
export const sandboxService = new SandboxService()