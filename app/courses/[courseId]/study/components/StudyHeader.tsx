import { Course } from "@/app/types";
import { useRouter } from "next/navigation";
import { Box, Button, Stack, Typography } from "@mui/material";

export default function StudyHeader({ course, onChangeCourse }: { course: Course, onChangeCourse: () => void }) {
  const router = useRouter();
  return (
    <Stack spacing={1.5}>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 2 }}>
        <Typography variant="overline" color="text.secondary" sx={{ letterSpacing: "0.2em", fontWeight: 700 }}>
          Flashcard Study
        </Typography>
        <Box sx={{ display: "flex", gap: 1 }}>
          <Button
            onClick={() => router.push(`/courses/${course.id}`)}
            variant="outlined" size="small"
          >
            ← Back to {course.title}
          </Button>
          <Button
            onClick={onChangeCourse}
            variant="outlined" size="small"
          >
            All courses
          </Button>
        </Box>
      </Box>
      <Typography variant="h3" sx={{ fontWeight: 600 }}>{course.title}</Typography>
      <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 720 }}>
        {course.description}
      </Typography>
    </Stack>
  );
}
