import history from "./components/history";
import query from "./components/query";
import { KiRequest } from "./types/main";
import { HistoryEvent } from "./types/history";

export const KI_REQUEST_EVENT = "ki-request";

document.addEventListener("DOMContentLoaded", () => {
  history.init();
  query.init();

  document.addEventListener(KI_REQUEST_EVENT, async (event: CustomEvent<KiRequest>) => {
    await new Promise(r => setTimeout(r, 2000));
    document.dispatchEvent(new CustomEvent<HistoryEvent>(history.APPEND_HISTORY_EVENT, {
      detail: {
        message: event.detail.request,
        alignment: 'left'
      }
    }));
  });
});
