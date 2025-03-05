export enum EventReason {
  StartQueryChain,
}

export type StartQueryEventData = {
  submitBtn: HTMLButtonElement;
  inputQuery: HTMLInputElement;
};
