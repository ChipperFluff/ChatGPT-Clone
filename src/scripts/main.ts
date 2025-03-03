import { queryEvent } from "./conversation";

const submitButton = document.querySelector(".content-query-control-submit-btn")

submitButton?.addEventListener('click', queryEvent)
document.addEventListener('keydown', (event) => {
    if(event.ctrlKey && event.key == "Enter") {
        queryEvent()
    }
});
