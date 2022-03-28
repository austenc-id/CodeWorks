import { ProxyState } from './app-data.js';
import { Material } from '../data/models/material.js';


export function saveMaterials(){
	localStorage.setItem('materials', JSON.stringify({
		materials: ProxyState.materials
	}))

}

export function loadMaterials(){
	let materialData = JSON.parse(localStorage.getItem('materials'))
	if (materialData != null){
		ProxyState.materials = materialData.materials.map(materials => new Material(materials))
	}

}