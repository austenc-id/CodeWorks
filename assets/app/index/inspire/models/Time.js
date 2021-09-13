export class Time {
	constructor(){
		this.date = new Date();
		this.gethour = this.date.getHours()
		this.getmin = this.date.getMinutes()
		this.getsec = this.date.getSeconds()
		this.hour = this.formatTime(this.gethour)
		this.min = this.formatTime(this.getmin)
		this.sec = this.formatTime(this.getsec)
		this.time = this.hour +':'+ this.min +':'+ this.sec
	}
		formatTime(t){
			if (t < 10){return '0' + t}
			else{return t}
		} 

		get Clock(){
		return /*html*/`
			<card class="card">${this.time}</card>
		`
	}
}