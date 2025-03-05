import history from "./components/history";
import query from "./components/query";
import workflow from "./workflow/main";

document.addEventListener("DOMContentLoaded", () => {
  history.init();
  query.init();
  workflow.init();
});
