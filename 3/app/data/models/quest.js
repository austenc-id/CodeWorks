export class Quest {
	constructor(questDetails){
    this.id = questDetails.consoleId
		this.questline = questDetails.questline
		this.quest = questDetails.quest
		this.stage = questDetails.stage
	}
	get CardTemplate(){
		return /*html*/`
			  <colm class="col-lg-4">
        <itemcard class="card text-center">
					<itemcard class="card-header container">
            <row class="row">
              <colm class="col-9">
                ${this.quest}
              </colm>
            </row>
          </itemcard>
          <itemcard class="card-body">
            <container class="container">
              <row class="row row-black">
                <colm class="col-lg"></colm>
                <colm class="col-lg">
                  <p>stage: ${this.stage}</p>
                  <p>${this.id}</p>
                </colm
              </row>
            </container>
          </itemcard>
          <itemcard class="card-footer">
            <p>${this.questline}</p>
          </itemcard>
        </itemcard>
      </colm>        
      `
	}
}