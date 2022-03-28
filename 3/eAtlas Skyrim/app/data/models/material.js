export class Material {
	constructor(materialData){
		this.id = materialData.consoleId
		this.materialname = materialData.materialname
		this.category = materialData.category
		this.weight = materialData.weight
		this.price = materialData.price
		this.source = materialData.source
		this.acq = materialData.acq
		this.vendorid = materialData.vendorid
		this.img = materialData.img
	}
	get CardTemplate(){
		return /*html*/`
				<colm class="col-lg-4">
            <itemcard class="card text-center">
							<itemcard class="card-header">
                <p>${this.materialname}</p>
              </itemcard>
              <itemcard class="card-body">
                <container class="container">
                  <row class="row">
										<colm class="col-lg">
										<!--<img src="style/images/materials/${this.img}" alt="${this.materialname}" class="card-img">-->
										</colm>
										<colm class="col-lg">
										<p>Data</p>
                    <p>Weight: ${this.weight}</p>
                    <p>Value: ${this.price}</p>
										</colm>
										</row>
                </container>
              </itemcard>
              <itemcard class="card-footer">
                <p>${this.id}</p>
              </itemcard>
            </itemcard>
        </colm>
		`
	}
}
          
          