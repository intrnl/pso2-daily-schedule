```ts
export interface Schema {
  /** A date in PST indicating the start of a cycle */
  start: string;
  /** How many days to cycle before repeating */
  cycle: number;
  /** Schedule items */
  items: ScheduleItem[];
}

export interface ScheduleItem {
  /** Days where this item appears */
  schedule: number[];
  /** Name of item */
  name: string;
  /** Info of the client order, if this is one */
  order?: OrderInfo;
}

export interface OrderInfo {
  /** Max amount to gather or exterminate */
  amount?: number;
  /** Meseta gained from clearing the order (after doing one gather) */
  meseta?: number;
  /** EXP gained from clearing the order (after doing one gather) */
  exp?: number;
}
```