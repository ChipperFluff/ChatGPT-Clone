export type HistoryItem = {
  side: "theirs" | "ours";
  content: string;
  status: "ok" | "error";
};
