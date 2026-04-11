import { Course } from "@/app/types";
import { bio110Unit1 } from "./units/1/unit";
import { bio110Unit10 } from "./units/10/unit";
import { bio110Unit11 } from "./units/11/unit";
import { bio110Unit12 } from "./units/12/unit";
import { bio110Unit13 } from "./units/13/unit";
import { bio110Unit14 } from "./units/14/unit";
import { bio110Unit15 } from "./units/15/unit";
import { bio110Unit16 } from "./units/16/unit";
import { bio110Unit2 } from "./units/2/unit";
import { bio110Unit3 } from "./units/3/unit";
import { bio110Unit4 } from "./units/4/unit";
import { bio110Unit5 } from "./units/5/unit";
import { bio110Unit6 } from "./units/6/unit";
import { bio110Unit7 } from "./units/7/unit";
import { bio100All } from "./units/review/unit";

export const bio110Course: Course = {
  id: "bio110",
  title: "Bio110",
  description: "Bio110",
  number: 2,
  type: "course",
  units: [
    bio100All,
    bio110Unit1,
    bio110Unit2,
    bio110Unit3,
    bio110Unit4,
    bio110Unit5,
    bio110Unit6,
    bio110Unit7,
    bio110Unit10,
    bio110Unit11,
    bio110Unit12,
    bio110Unit13,
    bio110Unit14,
    bio110Unit15,
    bio110Unit16,
  ],
};
