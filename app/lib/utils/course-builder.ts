import { Course, Group, groupSubgroupMap, Question } from "@/app/types";

const getQuestionsByGroupKey = (
  questions: Question[],
  key: "course" | "chapter" | "unit" | "section",
) => {
  return questions.reduce(
    (acc, question) => {
      const groupID = question[key].id;
      if (!acc[groupID]) {
        acc[groupID] = [];
      }
      acc[groupID].push(question);
      return acc;
    },
    {} as Record<string, Question[]>,
  );
};

const questionsByCourse = (questions: Question[]) =>
  getQuestionsByGroupKey(questions, "course");
const questionsByChapter = (questions: Question[]) =>
  getQuestionsByGroupKey(questions, "chapter");
const questionsByUnit = (questions: Question[]) =>
  getQuestionsByGroupKey(questions, "unit");
const questionsBySection = (questions: Question[]) =>
  getQuestionsByGroupKey(questions, "section");

function buildGroup<T extends Group>(group: T): T {
  const subGroupKey = groupSubgroupMap[group.type];

  return { ...group, [subGroupKey]: buildGroup(group[subGroupKey]) } as T;
}

export const buildCourse = (course: Course) => {
  return buildGroup(course);
};
