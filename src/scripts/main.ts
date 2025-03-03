import conversation from "./conversation";

function main() {
    const submitButton = document.querySelector(".content-query-control-submit-btn");

    if (!conversation.init()) {
        console.error('Failed to initialize the conversation module');
        return;
    }

    if (!submitButton) {
        console.error('Submit button not found');
        return;
    }

    submitButton.addEventListener('click', conversation.queryEvent.bind(conversation));
    document.addEventListener('keydown', (event) => {
        if (event.ctrlKey && event.key === "Enter") {
            conversation.queryEvent.bind(conversation)();
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    main();
});
