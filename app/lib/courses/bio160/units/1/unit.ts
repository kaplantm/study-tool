import { Unit } from "@/app/types";
import { bio160Chapter1 } from "./chapters/1";
import { bio160Chapter2 } from "./chapters/2";
import { bio160Chapter3 } from "./chapters/3";
import { bio160Chapter6 } from "./chapters/6";
import { bio160Chapter7 } from "./chapters/7";
import { bio160Chapter8 } from "./chapters/8";
import { bio160Chapter9 } from "./chapters/9";
import { bio160Chapter10 } from "./chapters/10";
import { bio160Chapter11 } from "./chapters/11";
import { bio160Chapter12 } from "./chapters/12";
import { bio160Chapter13 } from "./chapters/13";
import { bio160Chapter14 } from "./chapters/14";
import { bio160Chapter15 } from "./chapters/15";
import { bio160Chapter16 } from "./chapters/16";

export const bio160Unit1: Unit = {
  id: "bio160-unit-1",
  title: "Pathology",
  description: "BIO 160: Pathology.",
  number: 1,
  type: "unit",
  chapters: [
    bio160Chapter1,
    bio160Chapter2,
    bio160Chapter3,
    bio160Chapter6,
    bio160Chapter7,
    bio160Chapter8,
    bio160Chapter9,
    bio160Chapter10,
    bio160Chapter11,
    bio160Chapter12,
    bio160Chapter13,
    bio160Chapter14,
    bio160Chapter15,
    bio160Chapter16,
  ],
  questions: [],
};
