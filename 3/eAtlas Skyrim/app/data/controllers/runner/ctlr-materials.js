import { ProxyState } from "../../../state/app-data.js";
import { materialsLogic } from '../../logic/logic-materials.js';
import { _drawMaterials } from "../render/render-materials.js";

export class MaterialsController {

	attemptMaterialEntry (){
		event.preventDefault()
		  /**
     * @type {HTMLFormElement}
     */
    
    // @ts-ignore
		const form = event.target

		const materialData = {
			materialname: form.materialname.value,
			consoleId: form.consoleId.value,
			category: form.category.value,
			weight: form.weight.value,
			price: form.price.value,
			source: form.source.value,
		}

		try {
			materialsLogic.addMaterial(materialData)
		
		} catch (e) {
			form.make.classList.add('border-danger')
			console.error('console error materialslogic', e)
			return
		}
		form.reset()
		_drawMaterials()
	}
}