export const AppendHistoryEventName = "appendHistory"
export interface AppendHistoryEventData {
    side: 'theirs' | 'ours';
    content: string,
    status: 'ok'|'error'
}
