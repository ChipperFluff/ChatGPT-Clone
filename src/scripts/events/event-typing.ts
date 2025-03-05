import { EventReason } from "../types/events";

export const StartQueryEventName = "startQuery";

export interface WorkFlowEventData<T = null> {
  id: string;
  reason: EventReason;
  self: HTMLElement;
  data?: T;
}

export const AppendHistoryEventName = "appendHistory";
export interface AppendHistoryEventData {
  side: "theirs" | "ours";
  content: string;
  status: "ok" | "error";
}
