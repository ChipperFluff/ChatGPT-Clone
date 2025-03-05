import { HistoryItem } from "./types/history";

export async function requestAnswer(query: string): Promise<HistoryItem> {
  console.log("ask chtgpt here", query);
  await new Promise((f) => setTimeout(f, 3000));
  return {
    status: "ok",
    content: "lorem sasus oooooooooooooooooooooooooo no",
    side: "theirs",
  };
}
