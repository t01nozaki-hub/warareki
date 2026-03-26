import { Finalist } from "./types";
import { m1Finalists } from "./m1";
import { kocFinalists } from "./koc";
import { r1Finalists } from "./r1";

export type { Finalist };

export const finalistsData: Finalist[] = [
  ...m1Finalists,
  ...kocFinalists,
  ...r1Finalists
];
