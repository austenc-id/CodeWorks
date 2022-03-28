import { ProxyState } from "../../../appstate.js"
import { valuesService } from "../services/utilities/ValuesService.js";


//Private
function _draw() {
  let values = ProxyState.values;
  console.log(values);
}

//Public
export default class ValuesCtlr {
  constructor() {
    ProxyState.on("values", _draw);
  }

  addValue() {
    valuesService.addValue()
  }

}
