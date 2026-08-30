import { Chapter } from "@/app/types";
import { section21PropertiesOfWater } from "./sections/1-properties-of-water";
import { section22HydrologicCycle } from "./sections/2-hydrologic-cycle";
import { section23Soils } from "./sections/3-soils";

export const bio121Chapter2: Chapter = {
  id: "bio121-2",
  title: "The Physical Environment",
  description:
    "This chapter describes the physical environment of planet Earth and its importance to ecology. Sections 2.1 and 2.2 discuss the properties of water and the hydrologic cycle. Section 2.3 characterizes soils, their importance for ecology, and how they form.",
  number: 2,
  type: "chapter",
  sections: [section21PropertiesOfWater, section22HydrologicCycle, section23Soils],
  questions: [],
};
