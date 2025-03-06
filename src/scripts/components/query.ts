import { HistoryEvent } from "../types/history";
import history from "./history";

export default {
  init() {
    const components = document.querySelectorAll<HTMLFormElement>(".query");

    components.forEach((component) => {
      const submitBtn = component.querySelector<HTMLButtonElement>(
        ".query-control-submit-btn",
      );
      const queryInput =
        component.querySelector<HTMLTextAreaElement>("textarea");

      if (submitBtn === null || queryInput === null) {
        return;
      }

      component?.addEventListener("submit", (event) => {
        event.preventDefault();
        this.sendOutQuery(queryInput, submitBtn, queryInput);
      });

      queryInput?.addEventListener("keydown", (event) => {
        if (!(event.ctrlKey && event.key == "Enter")) return;
        this.sendOutQuery(queryInput, submitBtn, queryInput);
      });

      queryInput.addEventListener("input", () => {
        if (!queryInput.value.length) {
          submitBtn.classList.add("hidden");
          return;
        }

        submitBtn.classList.remove("hidden");
      });
    });
  },

  async sendOutQuery(
    textarea: HTMLTextAreaElement,
    submitBtn: HTMLButtonElement,
    queryInput: HTMLTextAreaElement,
  ) {
    const query = textarea.value;
    if (!query.length) {
      return;
    }

    textarea.value = "";
    submitBtn.disabled = true;
    queryInput.disabled = true;
    submitBtn.classList.add("hidden");

    document.dispatchEvent(
      new CustomEvent<HistoryEvent>(history.APPEND_HISTORY_EVENT, {
        detail: {
          message: query,
          alignment: "right",
        },
      }),
    );

    await new Promise((r) => setTimeout(r, 2000));

    document.dispatchEvent(
      new CustomEvent<HistoryEvent>(history.APPEND_HISTORY_EVENT, {
        detail: {
          message: `#theRealChatGPT #totalyNotJustAConstStr just ctrl+c and ctrl+v to answer: ${query}`,
          alignment: "left",
        },
      }),
    );

    submitBtn.disabled = false;
    queryInput.disabled = false;
  },
};
