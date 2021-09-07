import { ProxyState } from '../../state/app-data.js';
import { Material } from '../models/material.js';
import { saveMaterials } from '../../state/local-materials.js';


class MaterialsLogic {
	constructor(){
	ProxyState.on('materials', saveMaterials)
	}
	
	addMaterial(materialData){
		var testMaterial = new Material(materialData);
		ProxyState.materials = [...ProxyState.materials, testMaterial];
		console.log('MaterialsLogic Imported');
	}
}

export const materialsLogic = new MaterialsLogic