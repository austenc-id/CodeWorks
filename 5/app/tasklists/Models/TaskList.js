import { generateId } from '../../main/Utilities/generateIds.js';
export class TaskList {
	constructor(listData){
		this.listId = generateId()
		this.listname = listData.listname
		this.color = listData.color
		this.tasks = []
	}

	get CardTemplate() {
		return /*html*/`
<colm class='col-lg-4'>
	<card class="card col-lg-4 text-center">
		<card class='card-header' style="background-color: ${this.color};">
			<colm class='col-lg'>
				${this.listname}
			</colm>
			<colm class='col-lg-1'>
				<img src="" alt="">
			</colm>
		</card>
		<card class='card-body'>
			<div class="container">
				<row class='row'>
					<colm class='col-lg'>
						Tasks:
					</colm>
					<colm class='col-lg-1'>
						<img src="style/images/tasklists/list-plus.png" alt="add-task">
					</colm>
				</row>
			</div>
		</card>
		<card class='card-footer'></card>
	</card>
</colm>
		`
}
}