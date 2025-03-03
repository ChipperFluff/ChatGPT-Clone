import { requestAnswer } from "./ai";

const conversationHistory: HTMLElement | null = document.querySelector(".conversation-history")
const queryInput = document.querySelector<HTMLInputElement>(".content-query-input")

function createHistoryItem(side:'theirs'|'ours', content:string): HTMLElement {
    const item: HTMLElement = document.createElement('div');
    item.className = side;

    const item_content: HTMLElement = document.createElement('div');
    item_content.className = 'conversation-history-item';
    item_content.innerText = content;

    item?.append(item_content);
    return item;
}


function addHistoryItem(side:'theirs'|'ours', content:string) {
    const item: HTMLElement = createHistoryItem(side, content);
    conversationHistory?.append(item)
}

export async function queryEvent() {
    const content = queryInput?.value || '404'

    addHistoryItem('ours', content)
    queryInput.disabled = true;

    const response = await requestAnswer(content)

    queryInput.value = ''
    queryInput.disabled = false;
    addHistoryItem('theirs', response.content)
}

export function clearHistory() {
    if (!conversationHistory) return;
    conversationHistory.innerHTML = ''
}
