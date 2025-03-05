export enum EventReason {
  StartQueryChain,
}

export type StartQueryEventData = {
  submitBtn: HTMLButtonElement;
  inputQuery: HTMLInputElement;
};

export type KiContentEventData = {
  content: string;
};

export type KiAnswerEventData = {
  content: string;
};
