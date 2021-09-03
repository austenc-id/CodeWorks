export class Value {
  constructor(data) {
    this.id = data.id
    this.title = data.title
  }
	  get HTMLTemplate() {
    return /*html*/`
      <h1>Value.js placeholder</h1>
    `
  }
}
console.log('Value.js imported')