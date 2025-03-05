import history from "./components/history";
import query from "./components/query";
import workflow from "./workflow/main";
import ki from "./workflow/ki"

document.addEventListener("DOMContentLoaded", () => {
  history.init();
  query.init();
  workflow.init();
  ki.init();
});
