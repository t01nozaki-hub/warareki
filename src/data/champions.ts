import { Champion } from "./types";
import { m1Champions } from "./m1";
import { kocChampions } from "./koc";
import { r1Champions } from "./r1";

export type { Champion };

export const championsData: Champion[] = [
  ...m1Champions,
  ...kocChampions,
  ...r1Champions
];
