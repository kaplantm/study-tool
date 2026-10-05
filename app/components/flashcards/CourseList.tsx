"use client";

import { Course } from "@/app/types";
import { Box, ButtonBase, Chip, Stack, Typography } from "@mui/material";

type CourseListProps = {
  courses: Course[];
  onSelectCourse: (courseId: string) => void;
};

export default function CourseList({
  courses,
  onSelectCourse,
}: CourseListProps) {
  return (
    <Stack spacing={3}>
      <Typography variant="h5">Available courses</Typography>
      <Box
        sx={{
          display: "grid",
          gap: 2,
          gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" },
        }}
      >
        {courses.map((course) => (
          <ButtonBase
            key={course.id}
            onClick={() => onSelectCourse(course.id)}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "stretch",
              gap: 1,
              p: 2.5,
              border: 1,
              borderColor: "divider",
              textAlign: "left",
              bgcolor: "action.hover",
              "&:hover": {
                borderColor: "text.secondary",
                bgcolor: "action.selected",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography
                variant="caption"
                sx={{ fontWeight: 700, textTransform: "uppercase" }}
                color="text.secondary"
              >
                Course {course.number}
              </Typography>
              <Chip size="small" label={`${course.units.length} units`} />
            </Box>
            <Typography variant="h6">{course.title}</Typography>
            <Typography variant="body2" color="text.secondary">
              {course.description}
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 600 }}>
              Start studying →
            </Typography>
          </ButtonBase>
        ))}
      </Box>
    </Stack>
  );
}
