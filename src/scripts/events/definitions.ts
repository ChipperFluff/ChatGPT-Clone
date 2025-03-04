import { AppendHistoryEventData, AppendHistoryEventName } from "./event-typing";

export class AppendHistoryEvent extends CustomEvent<AppendHistoryEventData> {
    constructor(data: AppendHistoryEventData) {
        super( AppendHistoryEventName, { detail: data });
    }
}
