import { Checkbox, FormControlLabel, Stack } from "@mui/material";

type FlaggedToggleProps = {
  flaggedOnly: boolean;
  setFlaggedOnly: (val: boolean) => void;
};

export default function FlaggedToggle({ flaggedOnly, setFlaggedOnly }: FlaggedToggleProps) {
  return (
    <Stack sx={{ mb: 1 }}>
      <FormControlLabel control={<Checkbox color="warning" checked={flaggedOnly} onChange={(e) => setFlaggedOnly(e.target.checked)} />} label="Study flagged cards only" />
    </Stack>
  );
}
