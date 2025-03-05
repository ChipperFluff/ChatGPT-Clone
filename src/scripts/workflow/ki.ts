import {
  WorkFlowEventData,
  KiContentEventName,
  KiAnswerEventName
} from "../events/event-typing";
import {
  KiContentEventData,
  KiAnswerEventData
} from "../types/events";
import { listenToWorkFlow, dispatchWorkFlowEvent } from "../modules/workflow";

export default {
  init() {
    listenToWorkFlow<KiContentEventData>(
      KiContentEventName,
      this.onKiContent,
    );
  },

  onKiContent(eventData: WorkFlowEventData<KiContentEventData>) {
    console.log('ki relives: ', eventData)
    const data = eventData.data;
    console.log('ki relives: ', data)
    const content = data?.content;
    console.log('ki sees', content)
    
    const answer = content;
    console.log('ki:', answer)

    dispatchWorkFlowEvent<KiAnswerEventData>(KiAnswerEventName, {
      content: answer || 'An error happened in <workflow.ki.onKiContent|KiContentEventData'
    })
  },
};

