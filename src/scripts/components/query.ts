import { StartQueryEvent } from "../events/definitions";
import { EventReason } from "../types/events";

export default {
  init() {
    const submitButton = document.querySelectorAll<HTMLButtonElement>(
      'button[query-ref-id]:not([query-ref-id=""])',
    );

    if (!submitButton.length) {
      console.error("No submit buttons found");
      return;
    }

    submitButton.forEach((button: HTMLButtonElement) => {
      const queryId = button.getAttribute("query-ref-id");
      const queryInputs = document.querySelectorAll<HTMLInputElement>(
        `[query-input-id="${queryId}"]`,
      );

      if (queryId === null) {
        console.error(`Submit Button: ${button}\nmisses its "query-ref-id" id`);
        return;
      }
      if (queryInputs.length !== 1) {
        console.error(
          `Query Input: ${queryId} has none or more than one queryInputs`,
        );
        console.error(queryInputs);
        return;
      }

      const queryInput = queryInputs.item(0);

      button.addEventListener("click", () => {
        this.dispatchStartQueryEvent(queryId, button, queryInput);
      });

      queryInput.addEventListener("keydown", (event) => {
        if (!(event.ctrlKey && event.key == "Enter")) return;
        this.dispatchStartQueryEvent(queryId, button, queryInput);
      });
    });
  },

  dispatchStartQueryEvent(
    queryId: string,
    button: HTMLButtonElement,
    queryInput: HTMLInputElement,
  ) {
    const appendHistoryEvent = new StartQueryEvent({
      reason: EventReason.StartQueryChain,
      id: queryId,
      self: button,
      data: {
        submitBtn: button,
        inputQuery: queryInput,
      },
    });
    document.dispatchEvent(appendHistoryEvent);
  },
};
