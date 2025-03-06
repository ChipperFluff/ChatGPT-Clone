import { HistoryEvent } from "../types/history";

export default {
  APPEND_HISTORY_EVENT: "append-history",

  init() {
    const components = document.querySelectorAll<HTMLDivElement>(
      ".conversation-history",
    );

    components.forEach((component) => {
      document.addEventListener(this.APPEND_HISTORY_EVENT, ((
        event: CustomEvent<HistoryEvent>,
      ) => {
        const item = document.createElement("div");
        item.className = event.detail.alignment;

        const itemContent = document.createElement("div");
        itemContent.classList.add("conversation-history-item");
        itemContent.innerText = event.detail.message;

        item.append(itemContent);
        component.append(item);
      }) as EventListener);
    });
  },
};
