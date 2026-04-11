import { Course } from "@/app/types";
import { bio110Unit1 } from "./units/1/unit";
import { bio110Unit2 } from "./units/2/unit";
import { bio110Unit3 } from "./units/3/unit";
import { bio100All } from "./units/review/unit";

export const bio110Course: Course = {
  id: "bio110",
  title: "Bio110",
  description: "Bio110",
  number: 2,
  type: "course",
  units: [bio100All, bio110Unit1, bio110Unit2, bio110Unit3],
};
