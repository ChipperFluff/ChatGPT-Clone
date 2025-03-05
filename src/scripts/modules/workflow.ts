import { WorkFlowEventData } from "../events/event-typing";

export function listenToWorkFlow<T>(
  eventName: string,
  callback: (eventData: WorkFlowEventData<T>) => void,
) {
  document?.addEventListener(eventName, (event: Event) => {
    if (!(event instanceof CustomEvent && event.detail)) {
      return;
    }

    const details = event.detail as WorkFlowEventData<T>;
    callback(details);
  });
}

export function dispatchWorkFlowEvent<T>(eventName: string, detail: T) {
  const event = new CustomEvent(eventName, { detail });
  document.dispatchEvent(event);
}
