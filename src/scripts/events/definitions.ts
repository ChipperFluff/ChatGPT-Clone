import {
  AppendHistoryEventData,
  AppendHistoryEventName,
  WorkFlowEventData,
  StartQueryEventName,
} from "./event-typing";
import { StartQueryEventData } from "../types/events";

export class AppendHistoryEvent extends CustomEvent<AppendHistoryEventData> {
  constructor(data: AppendHistoryEventData) {
    super(AppendHistoryEventName, { detail: data });
  }
}

export class StartQueryEvent extends CustomEvent<
  WorkFlowEventData<StartQueryEventData>
> {
  constructor(data: WorkFlowEventData<StartQueryEventData>) {
    super(StartQueryEventName, { detail: data });
  }
}
