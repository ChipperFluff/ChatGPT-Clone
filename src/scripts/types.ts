export type ChatGPTResponse = {
    status: 'ok'|'error'
    content: string
}

export interface AppendHistoryEventData {
    side: 'theirs' | 'ours';
    content: string,
    status: 'ok'|'error'
}
