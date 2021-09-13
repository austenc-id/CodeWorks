import { dashAPIService } from "../services/DashboardAPIService.js";
import { imageService } from "../services/ImageService.js"

export async function reqImage(){
			try {
		await	dashAPIService.getImage()
		.then(image => {
			injectImage(image)
		}).catch((err) => {});}
		catch {}
		return
}


export function injectImage(image){
	try {
	var imageUrl = imageService.injectURL(image)
	}	catch{}
	return imageUrl
}