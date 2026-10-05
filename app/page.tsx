"use client";

import CourseList from "@/app/components/flashcards/CourseList";
import PageHeader from "@/app/components/flashcards/PageHeader";
import { courses } from "@/app/lib/courses/courses";
import { useRouter } from "next/navigation";
import { Box, Button, Container, Paper } from "@mui/material";

export default function CoursesPage() {
  const router = useRouter();

  const handleCourseSelect = (courseId: string) => {
    router.push(`/courses/${courseId}`);
  };

  return (
    <Box sx={{ minHeight: "100vh", py: 6 }}>
      <Container maxWidth="lg" sx={{ display: "flex", flexDirection: "column", gap: 5 }}>
        <PageHeader />

        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button href="/diagram-builder" variant="outlined" color="primary">
            Build a diagram question →
          </Button>
        </Box>

        <Paper sx={{ p: 3 }}>
          <CourseList courses={courses} onSelectCourse={handleCourseSelect} />
        </Paper>
      </Container>
    </Box>
  );
}
