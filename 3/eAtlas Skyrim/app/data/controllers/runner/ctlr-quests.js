import { ProxyState } from "../../../state/app-data.js"
import { questsLogic } from "../../logic/logic-quests.js"
import { _drawQuests } from "../render/render-quests.js"

export class QuestsController {
	attemptQuestEntry(){
		event.preventDefault()
		   /**
     * @type {HTMLFormElement}
     */
    
    // @ts-ignore

		const form = event.target

		const questDetails = {
			consoleId: form.consoleId.value,
			questline: form.questline.value,
			quest: form.quest.value,
			stage: form.stage.value,
		}
		  try {
      questsLogic.addQuest(questDetails)
    } catch (e) {
      form.make.classList.add('border-danger')
      return
    }

    form.reset()
		_drawQuests()
	}

	attemptQuestRemoval(){

		const quest = ProxyState.quests

		try {
      questsLogic.removeQuest(quest)
    } catch (e) {
    }
		_drawQuests()
	}
}