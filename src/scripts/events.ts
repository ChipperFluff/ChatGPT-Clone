import { AppendHistoryEventData } from './types'

export const AppendHistoryEventName = "appendHistory"
export class AppendHistoryEvent extends CustomEvent<AppendHistoryEventData> {
    constructor(data: AppendHistoryEventData) {
        super( AppendHistoryEventName, { detail: data });
    }
}
