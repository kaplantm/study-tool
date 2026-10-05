import { Button, Container, Paper, Typography, Box } from "@mui/material";

export default function NotFoundCourse({ onChangeCourse }: { onChangeCourse: () => void }) {
  return (
    <Box sx={{ minHeight: "100vh", py: 6 }}><Container maxWidth="lg">
        <Paper sx={{ p: 3, textAlign: "center" }}>
          <Typography color="text.secondary">
            Course not found
          </Typography>
          <Box sx={{ mt: 2 }}><Button
            onClick={onChangeCourse}
            variant="outlined">
              Back to courses
          </Button></Box>
        </Paper>
    </Container></Box>
  );
}
