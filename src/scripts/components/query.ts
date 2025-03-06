import { KI_REQUEST_EVENT } from "../main";
import { HistoryEvent } from "../types/history";
import { KiRequest } from "../types/main";
import history from "./history";

export default {
  init() {
    const components =
      document.querySelectorAll<HTMLFormElement>(".content-query");

    components.forEach((component) => {
      const submitBtn = component.querySelector<HTMLInputElement>(
        ".content-query-control-submit-btn",
      );
      const queryInput =
        component.querySelector<HTMLTextAreaElement>("textarea");

      if (submitBtn === null || queryInput === null) {
        return;
      }

      component?.addEventListener("submit", (event) => {
        event.preventDefault();
        this.sendOutQuery(queryInput)
      });

      queryInput?.addEventListener("keydown", (event) => {
        if (!(event.ctrlKey && event.key == "Enter")) return;
          this.sendOutQuery(queryInput)
      });
    });
  },

  sendOutQuery(textarea: HTMLTextAreaElement) {
    const query = textarea.value;
    textarea.value = ''

    document.dispatchEvent(
      new CustomEvent<HistoryEvent>(history.APPEND_HISTORY_EVENT, {
          detail: {
            message: query,
            alignment: "right"
          }
      }),
    );
    
    document.dispatchEvent(
      new CustomEvent<KiRequest>(KI_REQUEST_EVENT, {
          detail: {
            request: query,
          }
      }),
    );
  }
};
