import { HistoryEvent } from "../types/history";
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
        document.dispatchEvent(
          new CustomEvent<HistoryEvent>(history.APPEND_HISTORY_EVENT, {
              detail: {
                message: queryInput.value,
                alignment: "left"
              }
          }),
        );
      });

      queryInput?.addEventListener("keydown", (event) => {
        if (!(event.ctrlKey && event.key == "Enter")) return;
          new CustomEvent<HistoryEvent>(history.APPEND_HISTORY_EVENT, {
              detail: {
                message: queryInput.value,
                alignment: "left"
              }
          });
      });
    });
  }
};
