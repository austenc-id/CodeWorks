export class Material {
	constructor(materialData){
		this.id = materialData.id
		this.name = materialData.name
		this.category = materialData.category
		this.weight = materialData.weight
		this.price = materialData.price
		this.source = materialData.source
		this.acq = materialData.acq
		this.vendorid = materialData.vendorid
		this.img = materialData.img
	}
	get Template(){
		return `
			<colm class="col-lg-4 card-cols">
            <itemcard class="card text-center">
							<itemcard class="card-header">
                <p>${this.name}</p>
              </itemcard>
              <itemcard class="card-body">
                <container class="container">
                  <row class="row row-black">
										<colm class="col-lg">
										<img src="assets/style/images/${this.img}" alt="${this.name}" class="card-img">
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
export function getTemplate(){
	console.log('getTemplate exists?')
	return this.id
}
