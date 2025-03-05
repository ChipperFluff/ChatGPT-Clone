import { WorkFlowEventData, StartQueryEventName } from "../events/event-typing";
import { StartQueryEventData } from "../types/events";

export default {
  init() {
    this.listenToWorkFlow<StartQueryEventData>(
      StartQueryEventName,
      this.onStartQuery,
    );
  },

  onStartQuery(eventData: WorkFlowEventData<StartQueryEventData>) {
    const data = eventData.data;
    const input = data?.inputQuery;
    const value = input?.value;
    console.log(value);

    if (input) {
      input.value = "";
    }
  },

  listenToWorkFlow<T>(eventName: string, callback: (eventData: WorkFlowEventData<T>) => void) {
    document?.addEventListener(eventName, (event: Event) => {
      if (!(event instanceof CustomEvent && event.detail)) {
        return;
      }

      const details = event.detail as WorkFlowEventData<T>;
      callback(details);
    });
  },
}
