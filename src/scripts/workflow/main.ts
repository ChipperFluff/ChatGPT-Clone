import {
  WorkFlowEventData,
  StartQueryEventName,
  KiContentEventName,
  KiAnswerEventName,
} from "../events/event-typing";
import {
  StartQueryEventData,
  KiContentEventData,
  KiAnswerEventData,
} from "../types/events";
import { listenToWorkFlow, dispatchWorkFlowEvent } from "../modules/workflow";

export default {
  init() {
    listenToWorkFlow<StartQueryEventData>(
      StartQueryEventName,
      this.onStartQuery,
    );

    listenToWorkFlow<KiAnswerEventData>(
      KiAnswerEventName,
      this.onKiAnswer,
    );
  },

  onStartQuery(eventData: WorkFlowEventData<StartQueryEventData>) {
    const data = eventData.data;
    const input = data?.inputQuery;
    const button = data?.submitBtn;

    const value = input?.value;

    if (input && button) {
      input.value = "";
      input.disabled = true;
      button.disabled = true;

      dispatchWorkFlowEvent<KiContentEventData>(
        KiContentEventName,
        {
          content: value || "",
        },
      );
    }
  },

  onKiAnswer(eventData: WorkFlowEventData<KiAnswerEventData>) {
    console.log('ki said:', eventData.data?.content);
  }
}
