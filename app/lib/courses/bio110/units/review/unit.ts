import { Unit } from "@/app/types";
import { bio110Bonus1 } from "./chapters/bonus-1/1";
import { bio110Bonus2 } from "./chapters/bonus-2/1";

export const bio100All: Unit = {
  id: "unit-all",
  title: "Review",
  description: "All Chapters",
  number: 21,
  type: "unit",
  chapters: [bio110Bonus1, bio110Bonus2],
  questions: [],
};
