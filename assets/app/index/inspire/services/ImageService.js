import { ProxyDash } from "../state.js"



class ImageService{
	injectURL(apiData){
		ProxyDash.image = apiData.data.url
		return ProxyDash.image
	}
}

export const imageService = new ImageService