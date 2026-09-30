This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

TODO:
Add a flag for review button (flag icon) icon. Show "Incorrect" "Flag for Review" and "Correct". Store flagged flashcard ids in local storage. Clicking "incorrect" should also mark a question as flagged in local storage. Quiz summary should display failed cards and flagged cards (both are technically saved as flagged, but in the quiz summary we want to understand why). Add a toggle option to study flagged cards only (per course / per unit / per chapter). During this type of quiz, show an "unflag" button instead - getting a question right does not unflag it, you must click the unflag button.

Add button to get back to course selection from http://localhost:3001/courses/nutrition
Add button to exit flashcards early (link to http://localhost:3001/courses/ and link to http://localhost:3001/courses/:courseId)

## Generating questions from notes

We want to create a knowledge check quiz based the text provided below. The output should be copy-pastable typescript file. An example is provided below, demonstrating the different types of questions we support.

For a matching question, omit `options` and use `matches`. Each `left` and `right` value must be unique within the question:

```ts
{
  id: "organelle-matching",
  question: "Match each organelle to its primary function.",
  matches: [
    { left: "Mitochondrion", right: "Produces ATP" },
    { left: "Ribosome", right: "Builds proteins" },
    { left: "Nucleus", right: "Stores DNA" },
  ],
}
```

Matching rows can also contain any number of columns by using `values`:

```ts
matches: [
  { values: ["Mitochondrion", "Produces ATP", "Cellular respiration"] },
  { values: ["Ribosome", "Builds proteins", "Translation"] },
]
```

For a diagram-labeling question, use `diagram`. Target IDs and labels must be unique. The `x` and `y` coordinates position each numbered target as percentages of the image dimensions. Learners select a label and then its numbered target.

```ts
{
  id: "heart-labeling",
  question: "Label the chambers of the heart.",
  diagram: {
    imageUrl: "/diagrams/heart.png",
    alt: "Diagram of a human heart",
    targets: [
      { id: "1", label: "Right atrium", x: 36, y: 24 },
      { id: "2", label: "Left ventricle", x: 64, y: 72 },
    ],
  },
}
```

Output Example:

```
import { Chapter } from "@/app/types";

export const bio110Studocu: Chapter = {
  id: "5ae31fb2-7213-4d34-9091-ddfe5c1c8db0",
  title: "Chapter 6: Mitosis",
  description: "Introduction to cell division",
  number: 6,
  type: "chapter",
  sections: [],
  questions: [
    {
      id: "c8da7c8d-adf4-4e92-ab4f-af13af776344",
      question:
        "Sister chromatids separate and move toward the poles of the cell.",
      options: ["Prophase", "Metaphase", "Anaphase", "Telophase"],
      answer: "Anaphase",
      tags: ["mitosis", "cell division"],
    },
  ]
}

Text:
```
