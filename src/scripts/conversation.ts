import { requestAnswer } from "./ai";

const conversationHistory = document.querySelector<HTMLDListElement>(".conversation-history");
const queryInput = document.querySelector<HTMLInputElement>(".content-query-input");

export default {
    init() {
        if (!conversationHistory || !queryInput) {
            console.warn(`Conversation initialization error: conversationHistory=${!!conversationHistory}, queryInput=${!!queryInput}`);
            return false;
        }
        return true;
    },

    createHistoryItem(side: 'theirs' | 'ours', content: string): HTMLElement {
        const item = document.createElement('div');
        item.className = side;

        const itemContent = document.createElement('div');
        itemContent.className = 'conversation-history-item';
        itemContent.innerText = content;

        item.append(itemContent);
        return item;
    },

    addHistoryItem(side: 'theirs' | 'ours', content: string) {
        const item = this.createHistoryItem(side, content);
        conversationHistory?.append(item);
        item.scrollIntoView({ behavior: 'smooth' });
    },

    async queryEvent() {
        const content = queryInput?.value.trim();
        if (!content) {
            console.warn('no text from queryEvent')
            return;
        }

        this.addHistoryItem('ours', content);
        queryInput!.disabled = true;

        try {
            const response = await requestAnswer(content);
            this.addHistoryItem('theirs', response.content);
        } catch (error) {
            console.error('Failed to get a response from the AI:', error);
            this.addHistoryItem('theirs', 'Error communicating with AI.');
        }

        queryInput!.value = '';
        queryInput!.disabled = false;
        queryInput!.focus();
    },

    clearHistory() {
        if (conversationHistory) {
            conversationHistory.innerHTML = '';
        }
    }
}
