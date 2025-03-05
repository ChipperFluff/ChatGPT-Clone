import {
  AppendHistoryEventData,
  AppendHistoryEventName,
  WorkFlowEventData,
  StartQueryEventName,
  KiContentEventName,
  KiAnswerEventName,
} from "./event-typing";
import { StartQueryEventData, KiContentEventData, KiAnswerEventData } from "../types/events";

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

export class KiContentEvent extends CustomEvent<KiContentEventData> {
  constructor(data: KiContentEventData) {
    super(KiContentEventName, { detail: data });
  }
}

export class KiAnswerEvent extends CustomEvent<KiAnswerEventData> {
  constructor(data: KiAnswerEventData) {
    super(KiAnswerEventName, { detail: data });
  }
}
