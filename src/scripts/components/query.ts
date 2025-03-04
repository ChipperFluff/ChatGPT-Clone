import { AppendHistoryEvent } from "../events/definitions";
import { HistoryItem } from "../types/history";

export default {
    init() {
        const queryInput = document.querySelectorAll<HTMLInputElement>(".content-query-input");
        
        queryInput.forEach((input: HTMLInputElement) => {
            const submitButton = document.querySelector<HTMLButtonElement>('.content-query .content-query-control-right .content-query-control-submit-btn');
            if (!submitButton) {
                return;
            }
        
            submitButton?.addEventListener('click', () => {
                const historyItem = {
                    side: 'ours',
                    content: input.value,
                    status: 'ok'
                } as HistoryItem

                this.callAppendHistoryEvent(historyItem)                
            });
        
            input.addEventListener('keydown', (event) => {
                if(!(event.ctrlKey && event.key == "Enter")) return
                const historyItem = {
                    side: 'ours',
                    content: input.value,
                    status: 'ok'
                } as HistoryItem

                this.callAppendHistoryEvent(historyItem)                
            });
        
        });
    },

    callAppendHistoryEvent(historyItem: HistoryItem) {
        const appendHistoryEvent = new AppendHistoryEvent({
            side: historyItem.side,
            content: historyItem.content,
            status: historyItem.status  
        });
        document.dispatchEvent(appendHistoryEvent);
    }
}




