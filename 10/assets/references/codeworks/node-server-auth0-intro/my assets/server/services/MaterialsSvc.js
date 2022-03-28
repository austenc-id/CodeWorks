import { dbContext } from '../../../server/db/DbContext.js'
import { BadRequest, Forbidden } from '../../../server/utils/Errors.js'

class MaterialsService {
  async getMaterialById(materialId) {
    const material = await dbContext.Materials.findById(materialId).populate('creator', 'name picture')
    if (!material) {
      throw new BadRequest('Invalid Material Id')
    }
    return material
  }

  async editMaterial(materialId, userId, materialData) {
    const material = await this.getMaterialById(materialId)
    if (materialId !== material.creatorId.toString()) {
      throw new Forbidden('NO')
    }
    material.name = materialData.name || material.name
    material.source = materialData.source || material.source
    material.weight = materialData.weight || material.weight
    material.price = materialData.price || material.price
    material.description = materialData.description || material.description
    await material.save()
    return material
  }

  async removeMaterial(materialId, userId) {
    const material = await this.getMaterialById(materialId)
    if (userId !== material.creatorId.toString()) {
      throw new Forbidden('NO')
    }
    await material.remove()
    return material
  }

  async createMaterial(materialData) {
    const material = await dbContext.Materials.create(materialData)
    return material
  }

  async getMaterials(query) {
    const materials = await dbContext.Materials.find(query).populate('creator', 'name picture')
    return materials
  }
}

export const materialsService = new MaterialsService()
