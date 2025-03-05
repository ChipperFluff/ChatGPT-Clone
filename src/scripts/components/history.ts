import {
  AppendHistoryEventName,
  AppendHistoryEventData,
} from "../events/event-typing";
import { HistoryItem } from "../types/history";

export default {
  init() {
    const conversationHistory = document.querySelectorAll<HTMLDivElement>(
      ".conversation-history",
    );

    conversationHistory.forEach((history) => {
      document?.addEventListener(
        AppendHistoryEventName,
        (event: Event) => {
          if (!(event instanceof CustomEvent && event.detail)) {
            return;
          }

          const details = event.detail as AppendHistoryEventData;
          const item = this.createHistoryItem(details);
          history.append(item);
        },
      );
    });
  },

  createHistoryItem(historyItem: HistoryItem): HTMLDivElement {
    const item = document.createElement("div");
    item.className = historyItem.side;

    const itemContent = document.createElement("div");
    itemContent.classList.add("conversation-history-item");
    itemContent.classList.add(historyItem.status);
    itemContent.innerText = historyItem.content;

    item.append(itemContent);
    return item;
  },
};
