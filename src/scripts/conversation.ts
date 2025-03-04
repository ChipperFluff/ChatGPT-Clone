import { AppendHistoryEvent, AppendHistoryEventName } from "./events";
import { AppendHistoryEventData } from "./types";

const conversationHistory = document.querySelectorAll<HTMLDivElement>(".conversation-history");
const queryInput = document.querySelectorAll<HTMLInputElement>(".content-query-input");

export default {
    init() {
        conversationHistory?.forEach((history: HTMLDivElement) => {
            document?.addEventListener(AppendHistoryEventName as string, (event: Event) => {
                if (!(event instanceof CustomEvent && event.detail)) { return }

                const details = event.detail as AppendHistoryEventData;
                const item = this.createHistoryItem(details.side, details.content);
                history.append(item);
            });
        })

        queryInput?.forEach((input: HTMLInputElement) => {
            const submitButton = document.querySelector<HTMLButtonElement>('.content-query .content-query-control-right .content-query-control-submit-btn');
            const side = 'ours'
            const status = 'ok'

            submitButton?.addEventListener('click', () => {
                this.addHistoryItem(side, input.value, status)                
            });

            input.addEventListener('keydown', (event) => {
                if(!(event.ctrlKey && event.key == "Enter")) return
                this.addHistoryItem(side, input.value, status)                
            });

        });
    },

    addHistoryItem(side: 'theirs' | 'ours', content: string, status: 'ok' | 'error' = 'ok') {
        const appendHistoryEvent = new AppendHistoryEvent({
            side: side,
            content: content,
            status: status  
        });
        document.dispatchEvent(appendHistoryEvent);
    },

    createHistoryItem(side: 'theirs' | 'ours', content: string, status: 'ok' | 'error' = 'ok'): HTMLDivElement {
        const item = document.createElement('div');
        item.className = side;

        const itemContent = document.createElement('div');
        itemContent.classList.add('conversation-history-item');
        itemContent.classList.add(status);
        itemContent.innerText = content;

        item.append(itemContent);
        return item;
    }
}
