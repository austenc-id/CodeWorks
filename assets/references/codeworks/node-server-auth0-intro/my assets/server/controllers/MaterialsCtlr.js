import BaseController from '../../../server/utils/BaseController.js'
import { materialsService } from '../services/MaterialsSvc'
import { logger } from '../../../server/utils/Logger'
import { Auth0Provider } from '@bcwdev/auth0provider'

export class MaterialsCtlr extends BaseController {
  constructor() {
    super('api/materials')
    this.router
      .get('', this.getMaterials)
      .get('/:materialId', this.getMaterial)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createMaterial)
      .delete('/:materialId', this.removeMaterial)
      .put('/:materialId', this.editMaterial)
  }

  async getMaterials(req, res, next) {
    try {
      const materials = await materialsService.getMaterials(req.query)
      res.send(materials)
    } catch (error) {
      next(error)
    }
  }

  async getMaterial(req, res, next) {
    try {
      const material = await materialsService.getMaterialById(req.params.materialId)
      res.send(material)
    } catch (error) {
      next(error)
    }
  }

  async createMaterial(req, res, next) {
    try {
      logger.log('user', req.userInfo)
      req.body.creatorId = req.userInfo.id
      const material = await materialsService.createMaterial(req.body)
      res.send(material)
    } catch (error) {
      next(error)
    }
  }

  async removeMaterial(req, res, next) {
    try {
      const material = await materialsService.removeMaterial(req.params.materialId, req.userInfo.id)
      res.send(material)
    } catch (error) {
      next(error)
    }
  }

  async editMaterial(req, res, next) {
    try {
      const material = await materialsService.editMaterial(req.params.materialId, req.userInfo.id, req.body)
      res.send(material)
    } catch (error) {
      next(error)
    }
  }
}
